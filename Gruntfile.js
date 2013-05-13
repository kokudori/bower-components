/*global module */
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		concat: {
			'dist/main.js': [
				'components/jquery/jquery.js',
				'components/jquery-timeago/jquery.timeago.js',
				'components/lodash/lodash.js',
				'js/vendor/list.js',
				'js/vendor/list.paging.js',
				'js/main.js'
			]
		},
		uglify: {
			all: {
				files: {
					'dist/main.js': ['dist/main.js']
				}
			}
		},
		jshint: {
			files: ['js/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		regarde: {
			all: {
				files: ['js/*.js'],
				tasks: ['default']
			}
		}
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['concat', 'regarde']);
	grunt.registerTask('minify', ['concat', 'uglify']);
};
