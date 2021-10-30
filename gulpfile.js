var fs = require('fs');
var path = require("path");
var merge = require('gulp-merge');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require("gulp-order");

var scriptsPath = 'js';

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

gulp.task('jsconcat', function () {
	var folders = getFolders(scriptsPath);

	var tasks = folders.map(function (folder) {
		return gulp.src(path.join(scriptsPath, folder, '/*.js'))
			// .pipe(order([
			// 	'head.js',
			// 	'*.js'
			// ]))
			.pipe(concat(folder + '.js'))
			.pipe(gulp.dest('build')); //打包压缩在build目录下。
	});
	return new Promise((resolve, reject) => {
		merge(tasks);
		resolve('success')
	})
	//jsconcat
	// return new Promise((resolve, reject) => {
	// 	gulp.src('js/*.js') // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
	// 		.pipe(order([
	// 			'head.js',
	// 			'*.js'
	// 		]))
	// 		.pipe(concat('msg.js')) //合并成的js文件名称
	// 		//.pipe(uglify())            //压缩
	// 		.pipe(gulp.dest('build')); //打包压缩在build目录下。
	// 	resolve('success')
	// })
});