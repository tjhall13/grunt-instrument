/*
 * grunt-instrument
 * https://github.com/tjhall13/grunt-instrument
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			development: {
				src: ['Gruntfile.js', 'tasks/**.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};
