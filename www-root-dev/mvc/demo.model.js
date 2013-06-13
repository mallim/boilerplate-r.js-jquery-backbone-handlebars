define([ 
	"order!assets/js/backbone-min.js"
], function() {
	var model = Backbone.Model.extend({ 
		defaults: {
			title: "no title loaded",
			body : "no body loaded",
			parm1 : "no parm 1",
			parm2 : "no parm 2"
		},
		urlRoot : 'api/data.json'
	});

	return model;
});