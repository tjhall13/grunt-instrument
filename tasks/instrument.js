/*
 * grunt-instrument
 * https://github.com/tjhall13/grunt-instrument
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */

var jscoverage = require('jscoverage');

module.exports = function(grunt) {
	grunt.task.registerMultiTask('instrument', 'Grunt plugin for instrumenting code using jscoverage.', function() {
		this.files.forEach(function(file) {
			file.src.forEach(function(input) {
				var data = grunt.file.read(input);
				var output = jscoverage.process(input, data.toString('utf8'));
				grunt.file.write(file.dest, output);
			});
		});
	});
};
