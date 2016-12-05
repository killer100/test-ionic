angular.module('test.app', [
    'ui.router',
    'sideMenu'

])


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                template: '<side-menu></side-menu>',
                controller: 'MainController'
            })

            .state('app.buscar', {
                url: '/buscar',
                views: {
                    'menuContent': {
                        templateUrl: 'app/pages/buscar-movie/buscar-movie.html',
                        controller: 'buscarMovieController',
                        controllerAs: 'vm'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/buscar');
    })
    .controller('MainController', function () {

    });
