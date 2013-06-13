define("app_loader",[ 
  "jquery",
	"underscore",
  "backbone",
  "handlebars",
	"order!assets/js/app_routes.js"
], function(jQuery, underscore, bb, hb, router){ 
  

  jQuery.noConflict(  );

  return {
    $: jQuery,
    _: underscore,
    Backbone: Backbone,
    router: router,
    Handlebars: Handlebars
  };
  
});