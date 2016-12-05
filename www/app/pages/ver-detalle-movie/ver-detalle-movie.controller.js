(function () {

    var verDetalleMovieController = function (verDetalleMovieService, $ionicLoading, $state, $stateParams) {
        var vm = this;

        var init = function () {
            getMovie();
        };

        var getMovie = function () {
            showLoading();
            verDetalleMovieService.
                getMovie($stateParams.id).
                then(onLoadMovieSuccess).
                catch(onLoadMovieError);
        };

        var onLoadMovieSuccess = function (Response) {
            vm.movie = Response;
            hideLoading();
        };

        var onLoadMovieError = function (Response) {
            console.log(Response)
            hideLoading();
        };  

        var showLoading = function () {
            $ionicLoading.show({
                template: 'Buscando...',
                duration: 3000
            }).then(function () {
                //console.log("The loading indicator is now displayed");
            });
        };
        var hideLoading = function () {
            $ionicLoading.hide().then(function () {
                //console.log("The loading indicator is now hidden");
            });
        };

        init();
    };

    verDetalleMovieController.$inject = ['verDetalleMovieService', '$ionicLoading', '$state', '$stateParams'];

    angular.module('test.app')
        .controller('verDetalleMovieController', verDetalleMovieController);
})();