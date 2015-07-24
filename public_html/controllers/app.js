angular.module("urlCtrl", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider.when("/login", {
        templateUrl: "views/login.html"
    });
    $routeProvider.when("/admin", {
        templateUrl: "views/admin.html"
    });
    $routeProvider.when("/user", {
        templateUrl: "views/user.html"
    });
    $routeProvider.when("/subscribe", {
        templateUrl: "views/subscribe.html"
    });
    $routeProvider.when("/admin/createsBoardTraining", {
        templateUrl: "views/createsBoardTraining.html"
    });
    $routeProvider.otherwise({
        templateUrl: "views/login.html"
    });
});

