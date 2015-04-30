define(['marionette','vent' //Libraries
       ,'text!../templates/empty.html' //Templates
  ], 
function(Marionette,vent //Libraries
        ,empty_template
){

  var DetailComponentView = Backbone.Marionette.LayoutView.extend({
    template: _.template(empty_template),
    tagName: "tr",
    className: 'record',
    events: {

    },
    initialize: function(){
      // Tell everyone that view has been initialized
      vent.trigger("user:list:empty:initialize",{view:this});
    },

    onBeforeRender: function(){

      //Tell everyon that view has been almost rendered
      vent.trigger("user:list:empty:onBeforeRender",{view:this});
    },
    onRender: function(){

      //Tell everyon that view has been rendered
      vent.trigger("user:list:empty:onRender",{view:this});
    }

  });

  return DetailComponentView;

});