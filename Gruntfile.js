module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css', 'css/print.css']
        }
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
};
