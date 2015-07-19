/* global angular */

angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users/login")
.controller("subscribeCtrl", function($scope, $http, userUrl, $location){
     
    $scope.iscriviti = function(username, password, age, telephonnumber, weight, height){
        var iscritto = {
            username:username,
            password:password,
            age:age,
            telephonnumber:telephonnumber,
            weight:weight,
            height:height
        };
        
        //Usata api di Delpoyd perchè con $http.post non aggiungeva un utente.
        //Restituiva success se l'utente con username e password era gia presente
        //nel db. Restituiva error se non era presente
        dpd.users.post(iscritto, function(user, err) {
            if(err) return console.log(err);
            console.log(user);
        });
        
        $location.path("/user");
    };
    
});
