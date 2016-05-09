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
    uglify: {
      options: {
        banner: banner,
        compress: {
          dead_code: false,
          side_effects: false,
          unused: false,
        },
        mangle: true,
        preserveComments: function(node, comment) {
          return (/^!/).test(comment.value);
        },
        report: 'min',
        sourceMap: true,
      },
      target: {
        files: {
          'jquery.hotkeys.min.js': ['jquery.hotkeys.js'],
        },
      },
    },
    jshint: {
      options: {
        browser: true, // include browser globals
        eqeqeq: true, // require strict equality
        futurehostile: true, // warn if future-ES keywords are used
        globals: { // globally available variable names; value = is writable
          define: false, // for AMD exports
          module: false, // for CommonJS exports
        },
        latedef: 'nofunc', // disallow using variables before they're defined
        noarg: true, // disallow using arguments.caller and arguments.callee
        nonbsp: true, // disallow non-breaking spaces
        undef: true, // warn if a variable is used without being defined
        unused: true, // warn if a variable is defined but not used
        typed: true, // support typed array globals
        worker: true, // support Web Worker globals
      },
      target: {
        src: [
          'jquery.hotkeys.js',
          'Gruntfile.js',
        ],
      },
    },
    jscs: {
      options: {
        config: '.jscs.json',
      },
      main: [
        'jquery.hotkeys.js',
        'Gruntfile.js',
      ],
    },
    watch: {
      files: [
        'jquery.hotkeys.js',
      ],
      tasks: ['uglify'],
    },
  });

  // Task loading.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');

  // Task registration.
  grunt.registerTask('default', ['uglify', 'jshint', 'jscs']);
  grunt.registerTask('lint', ['jshint', 'jscs']);
};
