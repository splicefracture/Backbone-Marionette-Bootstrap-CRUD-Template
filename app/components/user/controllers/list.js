define(['vent'
       ,'../collections/users'
      ], 
function(vent
       ,Users
      ){
    
  //Fetch Collection
  vent.on("user:list:initialize", function(options){
    //Assign collection
    options.view.collection = new Users();
    //fetch collection items
    options.view.collection.fetch({ headers: {'x-access-token' : window.access_token } });
  });//END app:initializer

});