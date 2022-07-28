var gulp = require("gulp");

var exec = require("child_process").exec;

gulp.task(
  "generate",
  gulp.series(function (cb) {
    exec("node generate.js", function (err, stdout, stderr) {
      cb(err);
    });
  })
);



gulp.task(
  "default",
  gulp.series(["generate"])
);
