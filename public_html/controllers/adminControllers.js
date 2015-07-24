angular.module("urlCtrl")
.constant("userUrl", "http://localhost:5500/users")
.constant("logoutUrl", "http://localhost:5500/users/logout")
.constant("editBoardUrl", "http://localhost:5500/boardtraining")
.controller("adminCtrl", function($scope, $http, userUrl, logoutUrl, getData, editBoardUrl, $location){
    
    $scope.userSelected;
    $scope.boardSelected;
    
    $http.get(editBoardUrl)
    .success(function(data){
        $scope.boards = data;
    }).error(function(error){
        $scope.boards.error = error;
    });
    
    
    $http.get(userUrl)
    .success(function(data){
        $scope.users = data;
    }).error(function(error){
        $scope.error = error;
    });
    
    $scope.selectUser = function(user){
        $scope.userSelected = user;
    };
    
    $scope.aggiorna = function(button){
        var url = userUrl + "/" + $scope.userSelected.id;

        $http.put(url, $scope.userSelected)
            .success(function(data){
                $scope.userSelected = data;
                console.log(button);
                $scope[button] = false;
                $scope.button = false;                
            }).error(function(error){
                $scope.error = error;
        });
    };
    
    $scope.showButton = function(nameBoard){
        $scope.button5 = true;
        $scope.boardSelected = nameBoard;
    };
    
    $scope.deleteUser = function(user){
        var url = userUrl + "/" + user.id;
        var index;
        console.log($scope.users);
        angular.forEach($scope.users, function(value, key){
            if(user == value){
                index = key;
            }
        });
        console.log(index);
        $http.delete(url, user)
        .success(function(){
            $scope.users.splice(index, 1);
            console.log("Eliminato");
        }).error(function(){
            console.log("Errore");
        });
    };
    
    $scope.addBoard = function(){
        var board;
        angular.forEach($scope.boards, function(value){
            if(value.name == $scope.boardSelected){
                board = value;
            }
        });
        var url = userUrl + "/" + $scope.userSelected.id;
        $scope.userSelected.boardtraining = board;
        $http.put(url, $scope.userSelected)
        .success(function(data){
            console.log("Aggiornato");
        }).error(function(error){
            $scope.userSelected.error = error;
        });
        
        
    };
    
    $scope.logout = function(){
        $http.post(logoutUrl).
            success(function(data){
                $location.path("/login");
            }).error(function(error){
                console.log("ERRORE");
        });
    };
   
    $scope.boardTraining = function(){
        $location.path("/admin/createsBoardTraining");
    };
    
});

