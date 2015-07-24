angular.module("urlCtrl")
.constant("editBoardUrl", "http://localhost:5500/boardtraining")
.controller("boardCtrl", function($scope, $http, editBoardUrl, $location){

    

    $http.get(editBoardUrl)
        .success(function(data){
            $scope.boardtraining = data;
        }).error(function(error){
            $scope.error = error;
    });

    
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