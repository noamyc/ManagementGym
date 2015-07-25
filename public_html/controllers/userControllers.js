angular.module("urlCtrl")
.constant("userUrlMe", "http://localhost:5500/users/me")
.constant("userUrl", "http://localhost:5500/users")
.constant("logoutUrl", "http://localhost:5500/users/logout")
.controller("userCtrl", function($scope, $http, userUrlMe, userUrl, logoutUrl, $location){
    

    $http.get(userUrlMe, {withCredentials:true})
    .success(function(data){
        $scope.data = data;
        $scope.abbonamento = $scope.abbonamentoScaduto(); 
    }).error(function(error){
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
        if($scope.data.subscription.length == 0){
            value = true;
        }else{
            var today = new Date();
            var index = $scope.data.subscription.length - 1;
            var date = new Date($scope.data.subscription[index].date); 
            var durata = $scope.data.subscription[index].lenght;
            date.setDate(date.getDate() + parseInt(durata));

            if(date >= today){
                value = false;
            }else{;
                value = true;
            }
        }
        return value;
    };
    
    $scope.rinnova = function(){
        var value = JSON.parse($scope.sub);
        var date = new Date();
        var lenght = value.lenght;
        var price = value.price;
        
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        
        var dateOggetto = month + "/" + day + "/" + year;
                
        var oggetto = {
            lenght:lenght,
            price:price,
            date:dateOggetto
        };
        
        $scope.data.subscription.push(oggetto);
        
        $http.put(userUrl, $scope.data).
                success(function(data){
                    console.log("Aggiornato");
        }).error(function(error){
            console.log("Error");
        });
        $scope.abbonamentoScaduto();
    };
    
    $scope.logout = function(){
        $http.post(logoutUrl).
            success(function(data){
                $location.path("/login");
            }).error(function(error){
                console.log("ERRORE");
        });
    };
    
});