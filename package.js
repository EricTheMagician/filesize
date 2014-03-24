Package.describe({
	summary: 'filesystem library for meteor'
});

Package.on_use(function(api){

	api.add_files(['filesize.js'], ['server', 'client']);
	api.export(['filesize'], ['client', 'server']);

});