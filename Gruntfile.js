module.exports = function(grunt) {
  var banner = '/**\n' +
               ' * jQuery.hotkeys <%= pkg.version %>-<%= grunt.template.today("ddmmyyyy") %>\n' +
               ' * Contributors to this project are listed in the README at\n' +
               ' * <%= pkg.homepage %>\n' +
               ' *\n' +
               ' * @author <%= pkg.author %>\n' +
               ' * @license <%= pkg.license %> License\n' +
               ' * @ignore\n' +
               ' */\n';

  // Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        trailing: true,
      },
      files: ['jquery.hotkeys.js'],
    },
    uglify: {
      options: {
        banner: banner,
        sourceMap: true,
        compress: {
          side_effects: false,
          unused: false,
        },
        mangle: true,
        report: 'min',
      },
      target: {
        src: ['jquery.hotkeys.js'],
        dest: 'jquery.hotkeys.min.js',
      },
    },
  });

  // Task loading.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task registration.
  grunt.registerTask('default', ['uglify', 'jshint']);

};
