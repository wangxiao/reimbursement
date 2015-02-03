/**
 * @author wangxiao
 * 
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 */

angular.module('StarbuckApp')
.controller('loginCtrl', 
['$scope', 'storageSer', 'dataSer', '$location',
function ($scope, storageSer, dataSer, $location) {
    var name = storageSer.item('name');
    $scope.ui = {
        companys: dataSer.companys,
        departments: dataSer.departments,
        managers: dataSer.managers,
        invoices: dataSer.invoices
    };
    $scope.userData = {
        name: name || '',
        company: $scope.ui.companys[0],
        department: $scope.ui.departments[0],
        manager: $scope.ui.managers[0],
        invoices: [{
            invoice: $scope.ui.invoices[0],
            num: undefined,
            money: undefined
        }]
    };
    $scope.addNewItem = function() {
        $scope.userData.invoices.push({
            invoice: $scope.ui.invoices[0],
            num: undefined,
            money: undefined
        });
    };
    $scope.submit = function() {
        if ($scope.userData.name) {
            storageSer.item('name', $scope.userData.name);
            dataSer.userData = $scope.userData;
            $location.path('/work');
        }
    };
}]);
