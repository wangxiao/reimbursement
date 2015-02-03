'use strict';
angular.module('StarbuckApp')
.controller('loginCtrl', 
['$scope', 'storageSer', 'dataSer', '$location',
function ($scope, storageSer, dataSer, $location) {
    $scope.ui = {
        companys: dataSer.companys,
        departments: dataSer.departments,
        managers: dataSer.managers,
        invoices: dataSer.invoices
    };
    $scope.userData = {
        name: '',
        company: $scope.ui.companys[0],
        department: $scope.ui.departments[0],
        manager: $scope.ui.managers[0],
        invoices: [{
            invoice: $scope.ui.invoices[0],
            num: 0,
            money: 0
        }]
    };
    $scope.addNewItem = function() {
        $scope.userData.invoices.push({
            invoice: $scope.ui.invoices[0],
            num: 0,
            money: 0
        });
    };
    $scope.submit = function() {
        if ($scope.userData.phone) {
            storageSer.item('userData', JSON.stringify($scope.userData));
            $location.path('/work');
        }
    };
}]);
