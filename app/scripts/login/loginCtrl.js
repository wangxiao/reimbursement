/**
 * @author wangxiao
 * 
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 */

angular.module('StarbuckApp')
.controller('loginCtrl', 
['$scope', 'storageSer', 'dataSer', '$location', '$mdDialog',
function ($scope, storageSer, dataSer, $location, $mdDialog) {
    var name = storageSer.item('name');
    var dialogShow = storageSer.item('dialogFlag');
    var noteTipShow = false;
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
        note: '',
        invoices: [{
            invoice: $scope.ui.invoices[0],
            num: undefined,
            money: undefined
        }]
    };
    $scope.addNewItem = function() {
        if ($scope.userData.invoices.length >= 5) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('提示')
                    .content('一页报销单最多支持五行，如果超出请另填一页报销单。')
                    .ok('好的')
            );
        } else {
            $scope.userData.invoices.push({
                invoice: $scope.ui.invoices[0],
                num: undefined,
                money: undefined
            });
        }
    };
    $scope.removeItem = function(index) {
        if ($scope.userData.invoices.length > 1) {
            $scope.userData.invoices.splice(index, 1);
        }
    };
    $scope.submit = function() {
        if ($scope.userData.name) {
            storageSer.item('name', $scope.userData.name);
            dataSer.userData = $scope.userData;
            $location.path('/work');
        }
    };
    
    if (!dialogShow) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('欢迎使用')
                .content('首次使用前，麻烦您确认已经配置好打印机。不知道如何配置，可以找教练。')
                .ok('知道了')
        );
        storageSer.item('dialogFlag', true);       
    }

    $scope.showNoteTip = function() {
        if (!noteTipShow) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('边边姐说')
                    .content('「备注」这项不能瞎写，是给特殊情况准备的，比如招待费明细之类的。一般情况不需要，如果需要填写找边边姐确认，否则可能导致报销单无效。')
                    .ok('知道了')
            );
            noteTipShow = true;
        }
    };
}]);
