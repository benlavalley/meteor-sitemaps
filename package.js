Package.describe({
	name: 'gadicohen:sitemaps',
	summary: 'functions to easily output valid sitemaps',
	version: '0.0.27',
	git: 'https://github.com/gadicc/meteor-sitemaps.git',
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.8.1');
	api.use(['meteor', 'webapp', 'check', 'underscore'], 'server');

	api.use('gadicohen:robots-txt@0.0.11', 'server');

	api.add_files('sitemaps.js', 'server');
	api.export('sitemaps', 'server');
});

Npm.depends({
	xml2js: '0.4.22',
	zlibjs: '0.3.1',
});

Package.onTest(function (api) {
	api.use(['tinytest', 'http', 'random'], 'server');
	api.use('gadicohen:sitemaps');
	api.addFiles('tests.js', 'server');
});
