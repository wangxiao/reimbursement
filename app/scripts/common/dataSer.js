'use strict';
angular.module('StarbuckApp')
.factory('dataSer', 
['$window', '$q',
function($window, $q) {
    return {
        companys: [
            '美味书签（北京）信息技术有限公司',
            '另一家公司'
        ],
        departments: [
            '研发部',
            '行政部',
            '财务部'
        ],
        managers: [
            '江宏',
            '丰俊文',
            '吴雅琪'
        ],
        invoices: [
            '办公用品',
            '酒店住宿'
        ]
    };
    // 结束 
}]);
