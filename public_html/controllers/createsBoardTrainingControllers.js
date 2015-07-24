
angular.module("urlCtrl")
.constant("editBoardUrl", "http://localhost:5500/admin#/boardtraining")
.controller("boardCtrl", function($scope, $http, editBoardUrl, getData, $location){

    $scope.newBoard;

    $http.get(editBoardUrl)
        .success(function(data){
            $scope.boardtraining = data;
        }).error(function(error){
            $scope.error = error;
    });

    
    $scope.newBoardTraining = function(){
        $scope.newBoard.name = $scope.brdName;
        $scope.newBoard.description = $scope.brdDescription;
            
        $http.post(editBoardUrl,$scope.newBoard)
            .success(function(data){
                $scope.boardtraining.push(data); 
            }).error(function(error){
                $scope.error = error;
            });
    };
});