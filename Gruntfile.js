module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "babel": {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'lib'
          }
        ]
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
};
