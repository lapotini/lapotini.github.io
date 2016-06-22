module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
     options: {
       separator: ';'
     },
     dist: {
       src: ['js/src/*.js'],
       dest: 'js/dist/script.main.js'
     }
   },

   uglify: {

    dist: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.min.js'
    }
  },

  sass: {
    dist: {
        // options: {
        //     style: 'compressed'
        // },
        files: {
            'css/dist/style.css': 'css/src/*.scss'
        }
    }
},

  watch: {
  css: {
    files: 'css/src/*.scss',
    tasks: ['sass'],
    options: {
      livereload: true,
    },
  }
}





  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['sass']);

};
