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
                if(button == "button2"){
                    $scope.button2 = false;
                }
                if(button == "button1"){
                    $scope.button1 = false;
                }
                
            }).error(function(error){
                $scope.error = error;
        });
    };
        
    $scope.abbonamentoScaduto = function(){
        var value;
        var today = Date();
        console.log($scope.data);
        var index = $scope.data.subscription.length;
        index--;
        var date = new Date($scope.data.subscription[index].year, $scope.data.subscription[index].month, 
            $scope.data.subscription[index].day, 00,00,00,00);
        date.setDate(date.getDate()+ $scope.data.subscription[index].lenght);
        if(date >= today){
            value = true;
        }else{
            value = false;
        }
        return value;
    };
    
    
});