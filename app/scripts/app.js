angular.module('StarbuckApp', 
['ngMaterial', 'ngRoute'])
.config(['$routeProvider',
function ($routeProvider) {
$routeProvider
    .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'workCtrl'
    })
    .otherwise({
        redirectTo: '/work'
    });
}]);
