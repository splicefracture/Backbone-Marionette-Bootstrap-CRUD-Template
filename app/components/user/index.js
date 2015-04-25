define(['vent'
        //Views
        ,'./views/list'
      ], 
function(vent
        //Views
        ,ListView
      ){
    
  //Render New List View
  vent.on("app:initializer", function(){
    vent.trigger("app:render", {region:'container', view: new ListView() });
  });//END app:initializer

});