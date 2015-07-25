/* global angular */
angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users")
.controller("subscribeCtrl", function($scope, $http, userUrl, $location){
     
    $http.get(userUrl)
        .success(function(data){
            $scope.users = data;
        }).error(function(error){
            $scope.error = error;
    });
     
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

    $scope.setValidity = function(element){

        var exit = false;
        for(var i=0; (i<$scope.users.length) && (exit==false);i++){
            if(element == $scope.users[i].username){
                $scope.subscribe.username.$setValidity("unique", false);
                exit = true;
            }else{
                $scope.subscribe.username.$setValidity("unique", true);
            }
        }
    };
    
    
});