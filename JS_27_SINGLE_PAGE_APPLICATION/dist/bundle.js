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
  function Page(contentview) {
    _classCallCheck(this, Page);

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
    key: "run",
    value: function run() {
      var _this2 = this;

      var accept_routes = this.routes.filter(function (r) {
        return r.hash === _this2.getHash();
      });

      if (accept_routes.length === 0) {//404
      } else {
        this.activeRoute = accept_routes[0];
        this.page = new this.activeRoute.controller(this._contentview);
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

var MainModel =
/*#__PURE__*/
function () {
  function MainModel() {
    _classCallCheck(this, MainModel);

    this.data = [];
    MainModel.inst = this;
  }

  _createClass(MainModel, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.data;
    }
  }], [{
    key: "instance",
    value: function instance() {
      console.log(MainModel.inst);
      if (MainModel.inst) return MainModel.inst;
      return MainModel.inst = new MainModel();
    }
  }]);

  return MainModel;
}();

var AboutController =
/*#__PURE__*/
function (_Page) {
  _inherits(AboutController, _Page);

  function AboutController() {
    _classCallCheck(this, AboutController);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutController).apply(this, arguments));
  }

  _createClass(AboutController, [{
    key: "init",
    value: function init() {
      this.loadView("aboutUs");
    }
  }]);

  return AboutController;
}(Page);

var ContactsController =
/*#__PURE__*/
function (_Page2) {
  _inherits(ContactsController, _Page2);

  function ContactsController() {
    _classCallCheck(this, ContactsController);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContactsController).apply(this, arguments));
  }

  _createClass(ContactsController, [{
    key: "init",
    value: function init() {
      this.loadView("contacts");
    }
  }]);

  return ContactsController;
}(Page);

var MainController =
/*#__PURE__*/
function (_Page3) {
  _inherits(MainController, _Page3);

  function MainController() {
    _classCallCheck(this, MainController);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainController).apply(this, arguments));
  }

  _createClass(MainController, [{
    key: "init",
    value: function init() {
      this.registerModule(new HelloModule(".hello"));
      this.loadView("main");
    }
  }]);

  return MainController;
}(Page);

var HelloModule =
/*#__PURE__*/
function (_Module) {
  _inherits(HelloModule, _Module);

  function HelloModule() {
    _classCallCheck(this, HelloModule);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloModule).apply(this, arguments));
  }

  _createClass(HelloModule, [{
    key: "onComponentsLoading",
    value: function onComponentsLoading() {
      this.model = MainModel.instance();
      this.button = this.get("button");
      this.content = this.get(".content");
    }
  }, {
    key: "onBindEvents",
    value: function onBindEvents() {
      var _this3 = this;

      console.log(this.button);
      this.button.addEventListener("click", function (e) {
        return _this3.addLine();
      });
    }
  }, {
    key: "onCreate",
    value: function onCreate() {
      this.redraw();
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var _this4 = this;

      var data = this.model.getAll();
      this.content.innerHTML = "";
      data.forEach(function (elem) {
        _this4.content.insertAdjacentHTML("beforeEnd", "<div class=\"tag\">".concat(elem, "</div>"));
      });
    }
  }, {
    key: "addLine",
    value: function addLine() {
      this.model.add("hello");
      this.redraw();
    }
  }]);

  return HelloModule;
}(Module);

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.router = new Router("#/main");
    this.router.addRoute("#/main", MainController);
    this.router.addRoute("#/contacts", ContactsController);
    this.router.addRoute("#/about", AboutController);
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
      var _this5 = this;

      window.addEventListener("load", function (e) {
        return _this5.run();
      });
      window.addEventListener("hashchange", function (e) {
        return _this5.run();
      });
    }
  }]);

  return App;
}();

var app = new App();
app.start();