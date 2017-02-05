var gulp = require("gulp") ,
    uglify = require("gulp-uglify") , 
    cleancss = require("gulp-clean-css") ,
    prefixcss = require("gulp-autoprefixer") ,
    htmlmin = require("gulp-htmlmin") ,
    plumber = require("gulp-plumber") ,
    connect = require("gulp-connect"),
    imagemin = require("imagemin") ,
    concat = require("gulp-concat");
gulp.task('concatJS' , function(){
    return gulp.src(['start/js/jquery.js' , 'start/js/wow.js' , 'start/js/owl.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('start/js'))
})
gulp.task('concatCSS' , function(){
    return gulp.src(['start/css/animate.css' , 'start/css/owl.css' , 'start/css/owltheme.css' , 'start/css/bootstrap.min.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('start/css'))
})
gulp.task("css" , function(){
    return gulp.src("start/css/*.css")
               .pipe(plumber())
               .pipe(prefixcss())
               .pipe(cleancss())
               .pipe(gulp.dest("finish/css"))
               .pipe(connect.reload())
});
gulp.task("js" , function(){
    return gulp.src('start/js/*.js')
               .pipe(plumber())
               .pipe(uglify())
               .pipe(gulp.dest('finish/js'))
               .pipe(connect.reload())
});
gulp.task("images" , function(){
    return gulp.src("start/*.png")
               .pipe(plumber())
               .pipe(imagemin())
               .pipe(gulp.dest("finish/"))
               .pipe(connect.reload())
}); 
gulp.task("html" , function(){
    return gulp.src("start/*.html")
               .pipe(plumber())
               .pipe(htmlmin())
               .pipe(gulp.dest("finish/"))
               .pipe(connect.reload())
});
gulp.task("lettreHtml" , function(){
    return gulp.src("start/lettre/*.html")
               .pipe(plumber())
               .pipe(htmlmin())
               .pipe(gulp.dest("finish/lettre"))
               .pipe(connect.reload())
});
gulp.task("scienceHtml" , function(){
    return gulp.src("start/science/*.html")
               .pipe(plumber())
               .pipe(htmlmin())
               .pipe(gulp.dest("finish/science"))
               .pipe(connect.reload())
});

gulp.task("watch" , function(){
    gulp.watch('start/css/*.css' , ['css']);
    gulp.watch('start/js/*.js' , ['concatJS','js']);
    gulp.watch('start/css/*.css' , ['css']);
    gulp.watch('start/science/*.html' , ['scienceHtml']);
	gulp.watch('start/lettre/*.html' , ['lettreHtml'])
});
gulp.task('connect' , function(){
    connect.server({
        root: 'finish',
        livereload: true});
});
gulp.task('default' , ['concatCSS','css' ,'concatJS', 'js' , 'html' , 'scienceHtml' , 'lettreHtml' ,'watch' , 'connect']);
