"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

gulp.task("favicons", () => {
  return gulp
    .src(paths.favicons.src)
    .pipe(
      favicons({
        icons: {
          appleIcon: ["apple-touch-icon.png"],
          favicons: ["favicon-16x16.png", "favicon-32x32.png", "favicon.ico"],
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false
        }
      })
    )
    .pipe(gulp.dest(paths.favicons.dist))
    .pipe(
      debug({
        title: "Favicons"
      })
    );
});
