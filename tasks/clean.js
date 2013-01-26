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

  grunt.registerMultiTask('clean', 'Removes previously generated files and directories', function() {
    if (!this.data) { return false; }

    var data = this.data,
        file = null;

    // we need to determine if this is a string or an array
    if (typeof(data) === 'string' && (data instanceof Array === false)) {
      // string
      file = grunt.template.process(this.data);
      grunt.helper('clean', file);
      grunt.log.writeln("Folder \"" + file + "\" contents removed.");
    } else if (data instanceof Array === true){
      // array, loop through it
      for (var i = 0; i < data.length; i++) {
        file = grunt.template.process(data[i]);
        grunt.helper('clean', file);
        grunt.log.writeln("Folder \"" + file + "\" contents removed.");
      }
    } else {
      // something else, throw an error
      grunt.log.writeln("Clean accepts multiple targets, but each must use a string or array as data. E.g.:");
      grunt.log.writeln("    clean : {");
      grunt.log.writeln("        folderOne : 'path/to/folderOne',");
      grunt.log.writeln("        folderSet : [ 'path/to/folderTwo', 'path/to/folderThree' ]");
      grunt.log.writeln("    }");
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('clean', function clean(p) {
    // extracted from rimraf
    var fs = require('fs'),
        path = require('path'),
        lstat = process.platform === "win32" ? "stat" : "lstat",
        lstatSync = lstat + "Sync",
        d = path.resolve(p),
        s;

    try {
      s = fs[lstatSync](d);
    } catch (er) {
      if (er.code === "ENOENT") { return true; }
      throw er;
    }

    if(!s.isDirectory()) { return fs.unlinkSync(d); }

    fs.readdirSync(d).forEach(function (f) {
      grunt.helper('clean', path.join(d, f));
    });

    fs.rmdirSync(d);
  });

};
