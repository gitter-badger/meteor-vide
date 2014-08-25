Package.describe({
  summary: "Easy as hell jQuery plugin for video backgrounds",
  version: "0.0.1"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');

  api.add_files('Vide/dist/jquery.vide.js', 'client');
});
