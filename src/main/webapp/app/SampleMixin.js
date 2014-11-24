define([ "dojo/_base/declare", "dojo/_base/lang" ], function(declare, lang) {
    var impl = {
        // The default username
        username : "defaultUser",

        // The constructor
        constructor : function(args) {
            declare.safeMixin(this, args);
        },

        test : function() {
            console.info("this.username: " + this.username);
        }
    };
    return declare("app.SampleMixin", null, impl);
});