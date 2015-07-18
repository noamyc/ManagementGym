

/* global angular */

angular.module("urlCtrl")
.controller("loginCtrl", function($scope, $http){
    
    $http.get("http://localhost:5500/users")
    .success(function(data){
        $scope.users = data;
        console.log($scope.users);
    }).error(function(error){
        $scope.error = error;
    });
    
    $scope.accedi = function(user, pass){     
        
        $http.post("http://localhost:5500/users", {
            username: user,
            password: pass
        }).success(function (data) {
            console.log("autenticato")
        }).error(function (error) {
            $scope.authenticationError = error;
        });
        
    }; 
});
