/*
 * grunt-clean
 * https://github.com/maxbeatty/grunt-clean
 *
 * Copyright (c) 2012 Max Beatty
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('clean', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('clean'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('clean', function() {
    return 'clean!!!';
  });

};
