require.config({
  paths : {
    //Main
    backbone : 'vendor/backbone/backbone.min',
    underscore : 'vendor/underscore/underscore.min',
    jquery : 'vendor/jquery/jquery.min',
    marionette : 'vendor/marionette/marionette.min',
    backbone_relational : 'vendor/backbone-relational/backbone-relational.min',
    ImgCache : 'vendor/imagecache/imgcache.min',
    Lawnchair : 'vendor/lawnchair/lawnchair.min',
    'backbone.offline': 'vendor/backbone-offline/backbone.offline.min',
    bootstrap : 'vendor/bootstrap/bootstrap.min',
    moment : 'vendor/moment/moment.min',
    //RequireJS Plugin
    text: 'vendor/text/text.min', 
    //App
    app: 'app',
    vent: 'vent',
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    },
    backbone_relational : {
      deps : ['backbone']
    },
    Lawnchair: {
      exports: 'Lawnchair'
    },
    'backbone.offline': {
      deps: ['underscore', 'backbone', 'Lawnchair'],
      exports: 'Offline'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  waitSeconds: 0
});

require(['app'], function(MyApp) {

  var options = {};

  MyApp.start(options);

})