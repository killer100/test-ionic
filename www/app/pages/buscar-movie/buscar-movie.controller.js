

(function () {

    var buscarMovieController = function (buscarMovieService, $ionicLoading) {
        var vm = this;
        vm.input = {
            pelicula: ""
        };

        vm.pagination = {
            page: 1,
            total: 0,
            total_pages: 0,
            results: []
        };

        vm.Buscar = function () {
            initPagination();
            Search(true);
        };

        vm.loadMore = function () {
            vm.pagination.page++;
            Search(false);
        };

        var initPagination = function () {
            vm.pagination = {
                page: 1,
                total: 0,
                results: []
            };
        };

        var Search = function (newSearch) {
            showLoading();
            var search = buscarMovieService.
                searchMovie(vm.input.pelicula, vm.pagination.page);
            if (newSearch)
                search.then(SearchSuccess);
            else
                search.then(LoadSuccess);
            search.catch(SearchError);
        };

        var LoadSuccess = function (Response) {
            hideLoading();
            vm.pagination.results = vm.pagination.results.concat(Response.results);
        };

        var SearchSuccess = function (Response) {
            hideLoading();
            vm.pagination.results = Response.results;
            vm.pagination.total = Response.total_results;
            vm.pagination.total_pages = Response.total_pages;
        };

        var SearchError = function (Response) {
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
    };

    buscarMovieController.$inject = ['buscarMovieService', '$ionicLoading'];

    angular.module('test.app')
        .controller('buscarMovieController', buscarMovieController);
})();