//this will add IndexController to the ThisApp angular app.
(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('IndexController', function () {
        
        this.authenticate = function() {
            this.thisiswhatyoutyped = this.username + " + " + this.password;
        };
    
    });
 
}());