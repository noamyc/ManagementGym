angular.module("urlCtrl")
.constant("editBoardUrl", "http://localhost:5500/boardtraining")
.controller("boardCtrl", function($scope, $http, editBoardUrl, $location){

    

    $http.get(editBoardUrl)
        .success(function(data){
            $scope.boardtraining = data;
        }).error(function(error){
            $scope.error = error;
    });
    
    $scope.setValidity = function(element){

        var exit = false;
        for(var i=0; (i<$scope.boardtraining.length) && (exit==false);i++){
            if(element == $scope.boardtraining[i].name){
                $scope.form.brdName.$setValidity("unique", false);
                exit = true;
            }else{
                $scope.form.brdName.$setValidity("unique", true);
            }
        }
    };

    
    $scope.newBoardTraining = function(){
        
        var newBoard = {
            name:$scope.brdName,
            description:$scope.brdDescription
        };
        console.log(newBoard);
            
        $http.post(editBoardUrl, newBoard)
            .success(function(data){
                $scope.boardtraining.push(data); 
                $scope.brdName = "";
                $scope.brdDescription = "";
            }).error(function(error){
                $scope.error = error;
            });
    };
});