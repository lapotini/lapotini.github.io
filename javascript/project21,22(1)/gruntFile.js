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
   }




  });

  grunt.loadNpmTasks('grunt-contrib-concat');


  // grunt.registerTask('default', ['concat']);

};
