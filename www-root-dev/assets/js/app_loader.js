define("app_loader",[ 
  "jquery",
	"underscore",
  "backbone",
  "handlebars",
	"assets/js/app_routes.js"
], function(jQuery, underscore, bb, hb, router){ 
  

  console.log("Backbone", bb);
  console.log("Handlebars", hb);

  jQuery.noConflict(  );

  return {
    $: jQuery,
    _: underscore,
    Backbone: Backbone,
    router: router,
    Handlebars: Handlebars
  };
  
});