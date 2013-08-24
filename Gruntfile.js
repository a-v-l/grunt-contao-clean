module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Clean
		clean: {
			build: [
				'assets/css/*.css',
				'assets/images/**/*.+(gif|jpg|jpeg|png)',
				'assets/js/*.js',
			],

			demo: [
				'files/music_academy',
				'templates/music_academy.sql'
			],

			system: [
				'system/bin'
			],

			langs: [
				// tinyMCE language files
				'assets/tinymce/langs/!(en|ru|uk).js',
				// search in plugins and themes folder
				'assets/tinymce/**/langs/!(en|ru|uk)+(_dlg|).js',

				// contao language files
				'system/modules/+(calendar|comments|core|devtools|faq|listing|news|newsletter|repository)/languages/!(en|ru|uk)'
			]
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean:build']);
	grunt.registerTask('clean:contao', ['clean:build', 'clean:demo', 'clean:system', 'clean:langs']);
};