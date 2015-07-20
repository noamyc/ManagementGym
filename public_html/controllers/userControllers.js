angular.module("urlCtrl")
.constant("userUrlMe", "http://localhost:5500/users/me")
.constant("userUrl", "http://localhost:5500/users")
.controller("userCtrl", function($scope, $http, userUrlMe, userUrl){
    
    $scope.data;
    
      
    $http.get(userUrlMe,{
        withCredentials: true
    }).success(function(data) {
        if(!data){
            console.log("Errore");
        }
        $scope.data = data;
    }).error(function(error) {
        $scope.error = error;
    });
        
    
    $scope.aggiorna = function(button, input, campo){
        $scope.data[campo] = input;
        $http.put(userUrl, $scope.data)
            .success(function(data){
                $scope.data = data;
                $scope.reload();
            }).error(function(error){
                $scope.error = error;
        });
    };
    
    $scope.reload = function(){
        location.reload();
    };
    
    
    
    
});