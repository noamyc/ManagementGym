/* global angular */

angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users/login")
.controller("subscribeCtrl", function($scope, $http, userUrl, $location){
     
    $scope.iscriviti = function(username, password, age, telephonnumber, weight, height){
        
    };
    
});
