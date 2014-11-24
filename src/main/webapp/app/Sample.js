define([ "dojo/_base/declare", "dojo/_base/lang" ], function(declare, lang) {
    var impl = {
        constructor : function(str1, str2) {
            this.str1 = str1;
            this.str2 = str2;
        },

        test : function() {
            console.info(this.str1 + " " + this.str2);
        }
    };
    return declare("app.Sample", null, impl);
});