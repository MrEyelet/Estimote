//gulp plugins 
var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    imageMin = require('gulp-imagemin'),
    pngQuant = require('imagemin-pngquant');
 
var paths = {
    folder: 'images/',
    src: './assets/', 
    dest: '../public/'
}

// name of folder and output dimensions
var images = [
    {folder: 'images_152x152', width: 152, height: 152, crop: true},
    {folder: 'images_180x180', width: 180, height: 180, crop: true},
    {folder: 'images_167x167', width: 167, height: 167, crop: true}
];

//gulp task
gulp.task('images', function() {
 
    // loop through image groups		
    images.forEach(function(type){
    	
    	// resize object
        var resize_settings = {
            width: type.width,
            crop: type.crop,
            upscale : false
        }
       
        if (type.hasOwnProperty("height")) {
            resize_settings.height = type.height
        }
    	
        gulp
        
        // take images from the folder
        .src(paths.src+paths.folder+type.folder+'/**/*')
    
        // resizing images according to specifed dimensions
        .pipe(imageResize(resize_settings))
        
        // optimizing the images
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()]
        }))
        
        .pipe(gulp.dest(paths.dest+paths.folder+type.folder));
    });
});