/* global angular */
angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users")
.controller("subscribeCtrl", function($scope, $http, userUrl, $location){
     
    $scope.iscriviti = function(username, password, age, telephonnumber, weight, height){
        var iscritto = {
            username:username,
            password:password,
            age:age,
            telephonnumber:telephonnumber,
            weight:weight,
            height:height
        };
                
        $http.post(userUrl, iscritto).
        success(function(data) {
            console.log("Si");
            $location.path("/login");
        }).
        error(function(error) {
            $scope.error = error;
        });
    };
    
    
    $scope.reload = function(){
        location.reload();
    };
    
});