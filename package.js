Package.describe({
  summary: 'Easy as hell jQuery plugin for video backgrounds',
  name: 'zimme:vide',
  git: 'https://github.com/zimme/meteor-vide.git',
  version: '0.0.3'
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('jquery', 'client');

  api.add_files('Vide/dist/jquery.vide.js', 'client');
});
