define([
  "order!MVC/demo.view.js",
  "order!MVC/demo.model.js"
], function( DemoView, DemoModel ){

  var $ = jQuery; 

  var Router = Backbone.Router.extend({
    routes: {
      "demo":                 "demo",    // #help
      "demo2/:query":        "demo2",    // #search/kiwis
      "demo2/:query/p:page": "demo2"     // #search/kiwis/p7
    },
    demo: function() {  
      
      new DemoView({
        el: $("#workspace"), 
        model: new DemoModel()
      });
    },
    demo2: function(query, page) {
      var m = new DemoModel();
      m.set("parm1", query);
      m.set("parm2", page);
      new DemoView({
        el: $("#workspace"), 
        model: m
      });
    }
  }); 

  return Router;
});