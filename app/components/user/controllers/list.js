define(['vent'
       ,'../collections/users'
       ,'jquery'
      ], 
function(vent
       ,Users
       ,$
      ){
    
  //Fetch Collection
  vent.on("user:list:initialize", function(options){
    //Assign collection
    options.view.collection = new Users();
    
    //fetch collection items
    options.view.collection.fetch({ headers: {'x-access-token' : window.access_token } });
    
    this.listenTo(options.view.collection, "sync", function(){
      $( ".user-empty" ).toggleClass( "hide" );
      $( ".user-loading" ).toggleClass( "hide" );
    });

  });//END app:initializer

});