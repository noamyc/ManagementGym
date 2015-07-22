angular.module("urlCtrl")
.factory('getData', getData)
.constant("userUrlMe", "http://localhost:5500/users/me")
.constant("userUrl", "http://localhost:5500/users")
.controller("userCtrl", function($scope, $http, userUrlMe, userUrl, getData){
    
    var promise = getData()
    .then(function(num) {
        $scope.data = num;
    }, function(reason){
        console.log("Attendi");
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
        var promise = getData()
        .then(function(num) {
            var value;
            var today = Date();
            console.log(num);
            var index = num.subscription.length;
            index--;
            var date = new Date(num.subscription[index].year, num.subscription[index].month, 
                num.subscription[index].day, 00,00,00,00);
            date.setDate(date.getDate()+ num.subscription[index].lenght);
            if(date >= today){
                value = true;
            }else{
                value = false;
            }
            return value;
        }, function(reason){
            console.log("Attendi");
        });
        
    };
    
    
});
function getData($timeout, $q, $http) {
    return function() {
      return $q(function(resolve, reject) {
        $http.get("http://localhost:5500/users/me", {withCredentials:true}).
          success(function(data){
              resolve(data);
        }).error(function(error){
              reject(error);
        });
      });
    };
}
