"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ajax =
/*#__PURE__*/
function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }

  _createClass(Ajax, null, [{
    key: "get",
    value: function get(url, onsuccess, onerror) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);

      request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if (request.status === 200) onsuccess(request.responseText);else if (onerror) onerror(request.status, request.statusText);
      };

      request.send();
    }
  }, {
    key: "post",
    value: function post(url, params, onsuccess, onerror) {
      var request = new XMLHttpRequest();
      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if (request.status === 200) onsuccess(request.responseText);else if (onerror) onerror(request.status, request.statusText);
      };

      var _params = [];

      for (var i in params) {
        _params.push(i + "=" + encodeURIComponent(params[i]));
      }

      request.send(_params.join("&"));
    }
  }, {
    key: "postMultiPart",
    value: function postMultiPart(url, params, onsuccess, onerror) {
      var request = new XMLHttpRequest();
      request.open("POST", url, true);

      request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if (request.status === 200) onsuccess(request.responseText);else if (onerror) onerror(request.status, request.statusText);
      };

      request.send(params);
    }
  }]);

  return Ajax;
}();

var Module =
/*#__PURE__*/
function () {
  function Module(selector) {
    _classCallCheck(this, Module);

    this.selector = selector;
  }

  _createClass(Module, [{
    key: "get",
    value: function get(selector) {
      return this.container.querySelector(selector);
    }
  }, {
    key: "getAll",
    value: function getAll(selector) {
      return Array.prototype.slice.call(this.container.querySelectorAll(selector));
    }
  }, {
    key: "init",
    value: function init() {
      this.container = document.querySelector(this.selector);
      this.onComponentsLoading();
      this.onBindEvents();
      this.onCreate();
    }
  }, {
    key: "onCreate",
    value: function onCreate() {}
  }, {
    key: "onComponentsLoading",
    value: function onComponentsLoading() {}
  }, {
    key: "onBindEvents",
    value: function onBindEvents() {}
  }]);

  return Module;
}();

var Page =
/*#__PURE__*/
function () {
  function Page(contentview, router) {
    _classCallCheck(this, Page);

    this.router = router;
    this.modules = [];
    this.contentview = contentview;
  }

  _createClass(Page, [{
    key: "registerModule",
    value: function registerModule(module) {
      this.modules.push(module);
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "loadView",
    value: function loadView(view) {
      var _this = this;

      Ajax.get("/views/".concat(view, ".html"), function (response) {
        _this.content = response;

        _this.onContentLoaded();
      });
    }
  }, {
    key: "onContentLoaded",
    value: function onContentLoaded() {
      this.contentview.innerHTML = this.content;
      this.modules.forEach(function (m) {
        return m.init();
      });
    }
  }]);

  return Page;
}();

var Router =
/*#__PURE__*/
function () {
  function Router(mainhash) {
    _classCallCheck(this, Router);

    this.mainhash = mainhash;
    this.routes = [];
    this._contentview = null;
  }

  _createClass(Router, [{
    key: "addRoute",
    value: function addRoute(hash, controller) {
      this.routes.push({
        hash: hash,
        controller: controller
      });
    }
  }, {
    key: "getHash",
    value: function getHash() {
      return window.location.hash || this.mainhash;
    }
  }, {
    key: "compareHash",
    value: function compareHash(r, currentHash) {
      var routeHash = r.hash;

      if (/\{[a-z]+\}/i.test(routeHash)) {
        var route_components = routeHash.split("/");
        var hash_components = currentHash.split("/");

        for (var i in route_components) {
          if (/\{[a-z]+\}/i.test(route_components[i])) {
            var name = route_components[i].replace(/\{([a-z]+)\}/i, "$1");
            if (!r.params) r.params = {};
            r.params[name] = hash_components[i];
          } else {
            if (route_components[i] !== hash_components[i]) return false;
          }
        }

        return true;
      } else {
        return routeHash === currentHash;
      }
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      var accept_routes = this.routes.filter(function (r) {
        return _this2.compareHash(r, _this2.getHash());
      });

      if (accept_routes.length === 0) {//404
      } else {
        this.activeRoute = accept_routes[0];
        this.page = new this.activeRoute.controller(this._contentview, this);
        this.page.init();
      }
    }
  }, {
    key: "contentview",
    set: function set(value) {
      this._contentview = value;
    }
  }]);

  return Router;
}();

var NotesModel =
/*#__PURE__*/
function () {
  function NotesModel() {
    _classCallCheck(this, NotesModel);
  }

  _createClass(NotesModel, [{
    key: "add",
    value: function add(name, desc, id, onAdded) {
      Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=add", {
        name: name,
        desc: desc,
        id: id
      }, function (r) {
        return onAdded();
      });
    }
  }, {
    key: "getAll",
    value: function getAll(user_id, onLoaded) {
      Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=get", {
        id: user_id
      }, function (response) {
        var notes = JSON.parse(response).data;
        onLoaded(notes);
      });
    }
  }, {
    key: "del",
    value: function del(id, onDeleted) {
      Ajax.post("http://pdfstep.zzz.com.ua?action=todo&method=delete", {
        id: id
      }, function (r) {
        return onDeleted();
      });
    }
  }, {
    key: "getOne",
    value: function getOne(user_id, id, onLoaded) {
      this.getAll(user_id, function (res) {
        return res.filter(function (n) {
          return n.id == id;
        }).forEach(function (n) {
          return onLoaded(n);
        });
      });
    }
  }]);

  return NotesModel;
}();

var UsersModel =
/*#__PURE__*/
function () {
  function UsersModel() {
    _classCallCheck(this, UsersModel);
  }

  _createClass(UsersModel, [{
    key: "add",
    value: function add(name, onUserAdded) {
      Ajax.post("http://pdfstep.zzz.com.ua?action=user&method=add", {
        name: name
      }, function (r) {
        return onUserAdded();
      });
    }
  }, {
    key: "getAll",
    value: function getAll(onUsersLoaded) {
      Ajax.get("http://pdfstep.zzz.com.ua?action=user&method=getAll", function (response) {
        var users = JSON.parse(response).data;
        onUsersLoaded(users);
      });
    }
  }, {
    key: "del",
    value: function del(id, onUserDeleted) {
      Ajax.post("http://pdfstep.zzz.com.ua?action=user&method=del", {
        id: id
      }, function (r) {
        return onUserDeleted();
      });
    }
  }]);

  return UsersModel;
}();

var NotesController =
/*#__PURE__*/
function (_Page) {
  _inherits(NotesController, _Page);

  function NotesController() {
    _classCallCheck(this, NotesController);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesController).apply(this, arguments));
  }

  _createClass(NotesController, [{
    key: "init",
    value: function init() {
      var id = this.router.activeRoute._params.id;
      this.registerModule(new NotesPageModule(".notesModule", id));
      this.loadView("notes");
    }
  }]);

  return NotesController;
}(Page);

var NotesPageModule =
/*#__PURE__*/
function (_Module) {
  _inherits(NotesPageModule, _Module);

  function NotesPageModule(selector, user_id) {
    var _this3;

    _classCallCheck(this, NotesPageModule);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(NotesPageModule).call(this, selector));
    _this3.user_id = user_id;
    _this3.model = new NotesModel();
    return _this3;
  }

  _createClass(NotesPageModule, [{
    key: "onComponentsLoading",
    value: function onComponentsLoading() {
      this.form = this.get(".form");
      this.list = this.get(".list");
      this.formField = this.get("input");
      this.formTextarea = this.get("textarea");
      this.formBtn = this.get("button");
    }
  }, {
    key: "onBindEvents",
    value: function onBindEvents() {
      var _this4 = this;

      this.formBtn.addEventListener("click", function (e) {
        return _this4.addNote();
      });
      this.list.addEventListener("click", function (e) {
        if (e.target.matches(".delbtn")) _this4.delNote(e.target.dataset.id);
        if (e.target.matches(".morebtn")) _this4.openNote(e.target.dataset.id);
      });
    }
  }, {
    key: "onCreate",
    value: function onCreate() {
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      var _this5 = this;

      this.model.getAll(this.user_id, function (users) {
        _this5.list.innerHTML = "";
        users.forEach(function (u) {
          return _this5.list.appendChild(UserPageModule.createUserBlock(u));
        });
      });
    }
  }, {
    key: "addNote",
    value: function addNote() {
      var _this6 = this;

      var name = this.formField.value;
      var desc = this.formTextarea.value;
      this.model.add(name, desc, this.user_id, function () {
        return _this6.updateView();
      });
    }
  }, {
    key: "delNote",
    value: function delNote(id) {
      var _this7 = this;

      this.model.del(id, function () {
        return _this7.updateView();
      });
    }
  }, {
    key: "openNote",
    value: function openNote(id) {
      window.location.hash = "#/notes/details/" + this.user_id + "/" + id;
    }
  }], [{
    key: "createUserBlock",
    value: function createUserBlock(user) {
      var userBlock = document.createElement("div");
      userBlock.className = "listitem";
      userBlock.innerHTML = "<div class=\"data\">".concat(user.name, "</div>");
      var delbtn = document.createElement("button");
      delbtn.dataset.id = user.id;
      delbtn.innerText = "delete";
      delbtn.className = "btn btn-danger delbtn";
      var morebtn = document.createElement("button");
      morebtn.dataset.id = user.id;
      morebtn.innerText = "more";
      morebtn.className = "btn btn-success morebtn";
      userBlock.appendChild(delbtn);
      userBlock.appendChild(morebtn);
      return userBlock;
    }
  }]);

  return NotesPageModule;
}(Module);

var NotesDetailsController =
/*#__PURE__*/
function (_Page2) {
  _inherits(NotesDetailsController, _Page2);

  function NotesDetailsController() {
    _classCallCheck(this, NotesDetailsController);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotesDetailsController).apply(this, arguments));
  }

  _createClass(NotesDetailsController, [{
    key: "init",
    value: function init() {
      var id = this.router.activeRoute._params.id;
      var idUser = this.router.activeRoute._params.userId;
      this.registerModule(new NoteDetailsPageModule(".detailsModule", id, idUser));
      this.loadView("notes_details");
    }
  }]);

  return NotesDetailsController;
}(Page);

var NoteDetailsPageModule =
/*#__PURE__*/
function (_Module2) {
  _inherits(NoteDetailsPageModule, _Module2);

  function NoteDetailsPageModule(selector, id, id_user) {
    var _this8;

    _classCallCheck(this, NoteDetailsPageModule);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(NoteDetailsPageModule).call(this, selector));
    _this8.userId = id_user;
    _this8.id = id;
    _this8.model = new NotesModel();
    return _this8;
  }

  _createClass(NoteDetailsPageModule, [{
    key: "onComponentsLoading",
    value: function onComponentsLoading() {
      this.title = this.get(".title");
      this.desc = this.get(".desc");
    }
  }, {
    key: "onBindEvents",
    value: function onBindEvents() {}
  }, {
    key: "onCreate",
    value: function onCreate() {
      var _this9 = this;

      this.model.getOne(this.userId, this.id, function (n) {
        _this9.title.innerHTML = n.name;
        _this9.desc.innerHTML = n.desc;
      });
    }
  }]);

  return NoteDetailsPageModule;
}(Module);

var UsersController =
/*#__PURE__*/
function (_Page3) {
  _inherits(UsersController, _Page3);

  function UsersController() {
    _classCallCheck(this, UsersController);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsersController).apply(this, arguments));
  }

  _createClass(UsersController, [{
    key: "init",
    value: function init() {
      this.registerModule(new UserPageModule(".userModule"));
      this.loadView("users");
    }
  }]);

  return UsersController;
}(Page);

var UserPageModule =
/*#__PURE__*/
function (_Module3) {
  _inherits(UserPageModule, _Module3);

  function UserPageModule(selector) {
    var _this10;

    _classCallCheck(this, UserPageModule);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(UserPageModule).call(this, selector));
    _this10.model = new UsersModel();
    return _this10;
  }

  _createClass(UserPageModule, [{
    key: "onComponentsLoading",
    value: function onComponentsLoading() {
      this.form = this.get(".form");
      this.list = this.get(".list");
      this.formField = this.get("input");
      this.formBtn = this.get("button");
    }
  }, {
    key: "onBindEvents",
    value: function onBindEvents() {
      var _this11 = this;

      this.formBtn.addEventListener("click", function (e) {
        return _this11.addUser();
      });
      this.list.addEventListener("click", function (e) {
        if (e.target.matches(".delbtn")) _this11.delUser(e.target.dataset.id);
        if (e.target.matches(".morebtn")) _this11.openNotes(e.target.dataset.id);
      });
    }
  }, {
    key: "onCreate",
    value: function onCreate() {
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      var _this12 = this;

      this.model.getAll(function (users) {
        _this12.list.innerHTML = "";
        users.forEach(function (u) {
          return _this12.list.appendChild(UserPageModule.createUserBlock(u));
        });
      });
    }
  }, {
    key: "addUser",
    value: function addUser() {
      var _this13 = this;

      var name = this.formField.value;
      this.model.add(name, function () {
        return _this13.updateView();
      });
    }
  }, {
    key: "delUser",
    value: function delUser(id) {
      var _this14 = this;

      this.model.del(id, function () {
        return _this14.updateView();
      });
    }
  }, {
    key: "openNotes",
    value: function openNotes(id) {
      window.location.hash = "#/notes/" + id;
    }
  }], [{
    key: "createUserBlock",
    value: function createUserBlock(user) {
      var userBlock = document.createElement("div");
      userBlock.className = "listitem";
      userBlock.innerHTML = "<div class=\"data\">".concat(user.name, "</div>");
      var delbtn = document.createElement("button");
      delbtn.dataset.id = user.id;
      delbtn.innerText = "delete";
      delbtn.className = "btn btn-danger delbtn";
      var morebtn = document.createElement("button");
      morebtn.dataset.id = user.id;
      morebtn.innerText = "more";
      morebtn.className = "btn btn-success morebtn";
      userBlock.appendChild(delbtn);
      userBlock.appendChild(morebtn);
      return userBlock;
    }
  }]);

  return UserPageModule;
}(Module);

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.router = new Router("#/");
    this.router.addRoute("#/", UsersController);
    this.router.addRoute("#/notes/details/{userId}/{id}", NotesDetailsController);
    this.router.addRoute("#/notes/{id}", NotesController);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {
      this.router.contentview = document.querySelector(".contentView");
      this.router.run();
    }
  }, {
    key: "start",
    value: function start() {
      var _this15 = this;

      window.addEventListener("load", function (e) {
        return _this15.run();
      });
      window.addEventListener("hashchange", function (e) {
        return _this15.run();
      });
    }
  }]);

  return App;
}();

var app = new App();
app.start();