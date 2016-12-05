angular.module('test.app', [
    'ui.router',
    'sideMenu'

])


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/components/side-menu/side-menu.html',
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
            })
            
            .state('app.movie', {
                url: '/movie/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'app/pages/ver-detalle-movie/ver-detalle-movie.html',
                        controller: 'verDetalleMovieController',
                        controllerAs: 'vm'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/buscar');
    })
    .constant('API_KEY', '1c256e6b722d005e6ec151d5e1c4b3a5')
    .constant('API_URL','https://api.themoviedb.org/3')
    .controller('MainController', function () {

    });
