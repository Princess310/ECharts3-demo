var gulp = require('gulp');

// --------- util --------- //
var del = require("del");
var fs = require("fs");
var minifycss = require('gulp-minify-css');
// --------- /util --------- //

// --------- template precompile --------- //
var hbsp = require("hbsp");
var hbsPrecompile = hbsp.precompile;
// --------- /template precompile --------- //

// --------- js concat, uglify  --------- //
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var combiner = require('stream-combiner2');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
// --------- js concat, uglify --------- //

// --------- handle error --------- //
var handleError = function (err) {
	var colors = gutil.colors;
	console.log('\n');
	gutil.log(colors.red('Error!'));
	gutil.log('fileName: ' + colors.red(err.fileName));
	gutil.log('lineNumber: ' + colors.red(err.lineNumber));
	gutil.log('message: ' + err.message);
	gutil.log('plugin: ' + colors.yellow(err.plugin));
}
// --------- /handle error --------- //

// --------- postcss require --------- //
var postcss = require('gulp-postcss'); // gulp-postcss模块
var precss = require('precss'); // 预处理
var cssImport = require('postcss-import'); // to allow mixin imports
var postcssMixins = require("postcss-mixins");
var autoprefixer = require('autoprefixer'); // 自动添加前缀
var ext_replace = require('gulp-ext-replace'); // 将文件后缀名进行转换，这里改成pcss文件转换成css文件
var cssnano = require('cssnano');

var processors = [
	cssImport,
	postcssMixins,
	autoprefixer,
	precss,
	cssnano
];
// --------- /postcss require --------- //

var commonCssDir = "./common/css/";
var cssDir = "./css/";

// --------- tasks --------- //
gulp.task('clean', function () {
	var dirs = [cssDir];


	var dir;
	for (var i = 0; i < dirs.length; i++) {
		dir = dirs[i];
		// make sure the directories exists (they might not in fresh clone)
		if (!fs.existsSync(dir)) {
			fs.mkdir(dir);
		}
		// delete the .css files (this makes sure we do not )
		del.sync(dir + "*.css");
	}
});

gulp.task('tmpl-common', function () {
	gulp.src("./common/tmpl/*.tmpl")
		.pipe(hbsPrecompile())
		.pipe(concat("templates.js"))
		.pipe(gulp.dest("./common/js/"));
});

gulp.task('tmpl-_base', function () {
	gulp.src("./tmpl/*.tmpl")
		.pipe(hbsPrecompile())
		.pipe(concat("templates.js"))
		.pipe(gulp.dest("./js/"));
});

gulp.task('pcss-common', function () {
	gulp.src("./common/pcss/*.pcss")
		.pipe(postcss(processors))
		.pipe(ext_replace(".css"))
		.pipe(gulp.dest(commonCssDir));
});

gulp.task('pcss-_base', function () {
	gulp.src("./pcss/*.pcss")
		.pipe(postcss(processors))
		.pipe(ext_replace(".css"))
		.pipe(gulp.dest(cssDir));
});

gulp.task('minifyJs', function () {
	var combined = combiner.obj([
		gulp.src(['./common/js/*.js', './js/*.js'])
		.pipe(concat("bundle.js")),
		sourcemaps.init(),
		uglify(),
		sourcemaps.write('./'),
		gulp.dest('./dest/js/')
	])
	combined.on('error', handleError);
});

gulp.task('minifyCss', function () {
	var combined = combiner.obj([
			gulp.src(['./common/css/*.css', './css/*.css'])
			.pipe(concat("bundle.css")),
			sourcemaps.init(),
			minifycss(),
			sourcemaps.write('./'),
			gulp.dest('dest/css/')
		])
	combined.on('error', handleError)
})

gulp.task('watch', ['default'], function () {
	gulp.watch("./common/tmpl/*.tmpl", ['tmpl-common']);
	gulp.watch("./tmpl/*.tmpl", ['tmpl-_base']);

	gulp.watch("./common/pcss/*.pcss", ['pcss-common']);
	gulp.watch("./pcss/*.pcss", ['pcss-_base']);

	gulp.watch(['./common/js/*.js', './js/*.js'], ['minifyJs']);
	gulp.watch(['./common/css/*.css', './css/*.css'], ['minifyCss']);
});

gulp.task('default', ['clean', 'tmpl-common', 'tmpl-_base', 'pcss-common', 'pcss-_base', 'minifyJs', 'minifyCss']);
// --------- /tasks --------- //