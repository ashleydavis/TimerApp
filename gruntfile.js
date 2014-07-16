module.exports = function(grunt) {
  grunt.initConfig({
    'build-atom-shell-app': {
        options: {
            platforms: [
                "win32-ia32",
            ],
        },
    },
  });
  grunt.loadNpmTasks('grunt-atom-shell-app-builder');

  grunt.registerTask('default', ['build-atom-shell-app']);
};