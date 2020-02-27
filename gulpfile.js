let preprocessor = "scss"; 
let fileswatch = "html,txt,json,md"; 
let imageswatch = "jpg,jpeg,png"

const { src, dest, parallel, series, watch } = require("gulp");
const htmlValidator = require("gulp-w3c-html-validator");
const sass = require("gulp-sass");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const del = require("del");

// Local Server

function browsersync() {
  browserSync.init({
    server: { baseDir: "build" },
    notify: false
  });
}

function html() {
  return src("app/*.html")
    .pipe(htmlValidator())
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
}

// Custom Styles

function styles() {
  return src("app/styles/main." + preprocessor + "")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
    .pipe(dest("build/css"))
    .pipe(browserSync.stream());
}

// Scripts & JS Libraries

function scripts() {
  return src([
    "app/js/app.js"
  ])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(dest("build/js"))
    .pipe(browserSync.stream());
}

// Images

function images() {
  return src("app/img/*")
    .pipe(imagemin())
    .pipe(dest("build/img"));
}

function cleanimg() {
  return del("build/img/*", { force: true });
}

// Watching

function startwatch() {
  watch("app/*.html", parallel("html"));
  watch("app/styles/*." + preprocessor + "", parallel("styles"));
  watch("app/js/*.js", parallel("scripts"));
  watch(["app/img/*.{" + imageswatch + "}"], parallel("images"));
  watch(["app/**/*.{" + fileswatch + "}"]).on("change", browserSync.reload);
}

exports.html = html;
exports.browsersync = browsersync;
exports.assets = series(cleanimg, styles, scripts, images);
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleanimg = cleanimg;
exports.default = parallel(html, images, styles, scripts, browsersync, startwatch);
