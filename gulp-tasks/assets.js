"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("assets", () => {
  return gulp
    .src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dist))
    .pipe(
      debug({
        title: "Assets"
      })
    );
});
