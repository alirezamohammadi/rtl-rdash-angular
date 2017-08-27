/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'از این که ما را انتخاب کردید متشکریم، ما را در بهبود این نرم افزار یاری نمایید.'
    }, {
        type: 'danger',
        msg: 'آیا اشکالی در نرم افزار یافتید؟ آن را سریعا به ما گزارش دهید!'
    }];

    $scope.addAlert = function () {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}


/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };
}

/**
 * Side Menu
 */

angular.module("RDash")
    .controller("menuCtrl", function ($scope) {
        $scope.openMenu = 0;
        $scope.setOpenMenu = function(num){
            if(num == $scope.openMenu)
                $scope.openMenu=0;
            else
                $scope.openMenu = num;
            console.log($scope.openMenu);
        }
    });