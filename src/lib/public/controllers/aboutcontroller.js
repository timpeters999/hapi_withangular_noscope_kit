//this will add AboutController to the ThisApp angular app.
(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('AboutController', function () {
        
        this.doThis = function() {
            this.youclickedit = "You clicked it";
        };
         
    });
}());

