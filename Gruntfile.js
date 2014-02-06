module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src   : 'js/home.js',
        dest  : 'production/js/home.js'
      }
    },


  cssmin: {
    combine: {
      files: {
        'production/stylesheets/screen.css' : ['stylesheets/screen.css']
      }
    }
  },


  copy: {
    main: {
      files: [
        {expand: true,  src: 'index.html', dest: 'production/'},
        {expand: true,  src: 'js/jquery-1.4.2.min.js', dest: 'production/'},
        {expand: true,  cwd: 'images/', src: ['*'], dest: 'production/images', filter: 'isFile'},
        {expand: true,  cwd: 'stylesheets/fonts', src: ['*'], dest: 'production/stylesheets/fonts'}
      ]
    }
  }


  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin', 'copy']);

};

