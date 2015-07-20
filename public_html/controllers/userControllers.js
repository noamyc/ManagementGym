angular.module("urlCtrl")
.constant("userUrlMe", "http://localhost:5500/users/me")
.controller("userCtrl", function($scope, $http, userUrlMe, $location){
    
    $scope.data;
      
    $http.get(userUrlMe,{
        withCredentials: true
    }).success(function(data) {
        if(!data){
            console.log("Errore");
        }
        $scope.data = data;
        console.log($scope.data);
    }).error(function(error) {
        $scope.error = error;
    });
    
    $scope.aggiorna = function(element){
        $scope.data.weight = element.value;
        $http.post(userUrlMe, $scope.data)
          .success(function(data){
                console.log("aggiornato");
        }).error(function(error){
            console.log("Non aggirnato");
        });
    };
    
    
    
});