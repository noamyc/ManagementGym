/* global angular */

angular.module("urlCtrl")
.constant("userLoginUrl", "http://localhost:5500/users/login")
.controller("loginCtrl", function($scope, $http, userLoginUrl, $location){
     
    $scope.logIn = function(user, pass){
        $http.post(userLoginUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true
        }).success(function (data) {
            if(user == "admin"){
                $location.path("/admin");
            }else{
                $location.path("/user");
            }
        }).error(function (error) {
            $scope.authenticationError = error;
        });
    }; 
    
    
    $scope.subscribe = function(){
        $location.path("/subscribe");
    };
    
});
