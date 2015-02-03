angular.module('StarbuckApp', 
['ngMaterial', 'ngRoute'])
.config(['$routeProvider',
function ($routeProvider) {
$routeProvider
    .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'workCtrl'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
    .otherwise({
        redirectTo: '/work'
    });
}]);
