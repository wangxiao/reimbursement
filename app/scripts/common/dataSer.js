/**
 * @author wangxiao
 * 
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 */
angular.module('StarbuckApp')
.factory('dataSer', 
['$window', '$q',
function($window, $q) {
    return {
        userData: {
        },
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
            '丰俊文',
            '江宏',
            '吴雅琪'
        ],
        invoices: [
            '办公用品',
            '酒店住宿'
        ]
    };
    // 结束 
}]);
