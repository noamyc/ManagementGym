angular.module("urlCtrl", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider.when("/login", {
        templateUrl: "views/login.html"
    });
    $routeProvider.otherwise({
        templateUrl: "views/login.html"
    });
});

