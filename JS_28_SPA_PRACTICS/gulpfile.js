let gulp = require("gulp");
let cleanCSS = require("gulp-clean-css");
let rename = require("gulp-rename");
let babel = require("gulp-babel");
let uglyfly = require('gulp-uglyfly');
let browserSync = require("browser-sync");
let less = require("gulp-less");
let concat = require("gulp-concat");
let del = require("del");


let paths = {
    html:"./src/*.html",
    view:"./src/views/*.html",
    less:"./src/css/*.less",
    js: [
        './src/js/system/*.js',
        './src/js/models/*.js',
        './src/js/controllers/*.js',
        "./src/js/App.js"
    ]
};


gulp.task("sync",()=>{
    browserSync.init({
        server:{baseDir:"./dist"},
        port:8080,
        open:true,
        notify:false
    })
});


gulp.task("html",()=>{
    gulp.src(paths.html)
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.reload({stream:true}))

    gulp.src(paths.view)
        .pipe(gulp.dest("./dist/views"))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task("less",()=>{
    gulp.src(paths.less)
        .pipe(less())
        .pipe(cleanCSS({
            compatibility:'ie8',
            format:'beautify'
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(cleanCSS({
            compatibility:'ie8'
        }))
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task("js",()=>{
    gulp.src(paths.js)
        .pipe(concat("bundle.js"))
        .pipe(babel({presets:['@babel/env']}))
        .pipe(gulp.dest("./dist"))
        .pipe(uglyfly())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.reload({stream:true}))

    // gulp.src(paths.js_controllers)
    //     .pipe(babel({presets:['@babel/env']}))
    //     .pipe(gulp.dest("./dist/js/controllers"))
    //     .pipe(uglyfly())
    //     .pipe(rename({suffix:".min"}))
    //     .pipe(gulp.dest("./dist/js/controllers"))
    //     .pipe(browserSync.reload({stream:true}))

});
gulp.task("watch",()=>{
    gulp.watch(paths.html,['html']);
    gulp.watch(paths.view,['html']);
    gulp.watch(paths.less,['less']);
    gulp.watch("src/css/import/*.less",['less']);
    gulp.watch(paths.js,['js']);
});

gulp.task("clean",()=>del.sync(["./dist"]));

gulp.task("build",["clean","less","html","js","watch","sync"]);

