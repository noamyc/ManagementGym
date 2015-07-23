angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users")
.constant("logoutUrl", "http://localhost:5500/users/logout")
.controller("adminCtrl", function($scope, $http, userUrl, logoutUrl, getData, $location){
    
    $scope.userSelected;
    
    $http.get(userUrl)
    .success(function(data){
        $scope.users = data;
        console.log(data);
    }).error(function(error){
        $scope.error = error;
    });
    
    $scope.selectUser = function(user){
        $scope.userSelected = user;
    };
     
     
    
});

