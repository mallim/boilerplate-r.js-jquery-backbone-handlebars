/*! sa main app script */
define('app',[
	"app_loader"
],  
function(loader ){
	var $ = loader.$;
	var Backbone = loader.Backbone;  
 

	function initializeApp () {
				
		$(function () {
			new loader.router();	
			Backbone.history.start(); 
		});

	}
	 
	return {initialize : initializeApp};
});