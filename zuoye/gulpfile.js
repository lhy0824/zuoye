var gulp = require('gulp');
var uglify = require('gulp-uglify'); //压缩js
var scss = require('gulp-clean-css'); //压缩css
var autoprefixer = require('gulp-autoprefixer'); //添加前缀
var minhtml = require('gulp-htmlmin'); //文件压缩
//压缩js
// gulp.task('defalut', function() {
//     gulp.src('./src/**/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('static'))
// });

//添加前缀和压缩css
// gulp.task('defalut', function() {
//     gulp.src('./src/**/*.scss')
//         .pipe(scss())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'Android>=4.0']
//         }))
//         .pipe(gulp.dest('static'))
// });

//压缩文件
var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};
gulp.task('defalut', function() {
    gulp.src('./src/index.html')
        .pipe(minhtml(options))
        .pipe(gulp.dest('static'))
})