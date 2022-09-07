"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: "./src/views/templates/**/*.html",
      dist: "./dist/",
      watch: "./src/views/**/*.html"
    },
    styles: {
      src: "./src/styles/**/*.scss",
      dist: "./dist/styles/",
      watch: "./src/styles/**/*.scss"
    },
    scripts: {
      src: "./src/scripts/*.js",
      dist: "./dist/scripts/",
      watch: "./src/scripts/**/*.js"
    },
    images: {
      src: "./src/assets/*.{jpg,jpeg,png,gif,svg}",
      dist: "./dist/assets/",
      watch: "./src/assets/*.{jpg,jpeg,png,gif,svg}"
    },
    sprites: {
      src: "./src/assets/sprites/*.svg",
      dist: "./dist/",
      watch: "./src/assets/sprites/*.svg"
    },
    fonts: {
      src: "./src/assets/fonts/*.{woff2}",
      dist: "./dist/fonts/",
      watch: "./src/assets/fonts/*.{woff2}"
    },
    favicons: {
      src: "./src/assets/favicons/*.{jpg,jpeg,png,gif}",
      dist: "./dist/assets/favicons/"
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/"
    },
    assets: {
      src: [
        "./src/assets/*",
        "!./src/assets/*.{jpg,jpeg,png,gif,svg}",
        "!./src/assets/sprites",
        "!./src/assets/fonts",
        "!./src/assets/favicons"
      ],
      dist: "./dist/assets/",
      watch: [
        "./src/assets/*",
        "!./src/assets/*.{jpg,jpeg,png,gif,svg}",
        "!./src/assets/sprites",
        "!./src/assets/fonts"
      ]
    }
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "sprites",
    "fonts",
    "favicons",
    "assets"
  ]),
  gulp.parallel("serve")
);

export const prod = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "sprites",
    "fonts",
    "favicons",
    "gzip",
    "assets"
  ])
);

export default development;
