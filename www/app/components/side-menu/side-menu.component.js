(function () {

    var sideMenuComponent = {
        templateUrl: 'app/components/side-menu/side-menu.html',
    };

    angular.module('sideMenu', [])
        .component('sideMenu', sideMenuComponent);
})();