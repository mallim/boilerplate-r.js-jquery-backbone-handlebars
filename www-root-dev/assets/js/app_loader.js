define([ 
	"order!assets/js/handlebars.js",
	"order!assets/js/jquery.min.js",
	"order!assets/js/underscore-min.js",
	"order!assets/js/backbone-min.js",
	"order!assets/js/app_routes.js"
], function(a, b, c, d, router){ 
  
  jQuery.noConflict(  );

  return {
    $: jQuery,
    _: _,
    Backbone: Backbone,
    router: router,
    Handlebars: Handlebars
  };
});