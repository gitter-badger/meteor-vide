Package.describe({
  summary: 'Easy as hell jQuery plugin for video backgrounds',
  name: 'zimme:vide',
  git: 'https://github.com/zimme/meteor-vide.git',
  version: '0.0.4'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('jquery', 'client');

  api.addFiles('Vide/dist/jquery.vide.js', 'client');
});
