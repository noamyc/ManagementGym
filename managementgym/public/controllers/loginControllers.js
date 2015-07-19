/* global angular */

angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users/login")
.controller("loginCtrl", function($scope, $http, userUrl, $location){
     
    $scope.accedi = function(user, pass){
        $http.post(userUrl, {
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
    
    
    $scope.iscriviti = function(){
        $location.path("/subscribe");
    }
    
});