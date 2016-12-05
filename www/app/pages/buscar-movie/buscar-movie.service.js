
(function () {

    var buscarMovieService = function ($http, $q, API_KEY, API_URL) {
        var svc = this;
        var url = '/search/movie';

        svc.searchMovie = function (title, page) {
            var defered = $q.defer();
            var params = {
                api_key: API_KEY,
                page: page,
                query: title,
                language: 'es'
            };
            $http.get(API_URL + url, { params: params }).then(function (Response) {
                defered.resolve(Response.data);
            }, function (Error) {
                defered.reject(Error);
            });
            return defered.promise;
        };

        return {
            searchMovie: svc.searchMovie
        };
    };

    buscarMovieService.$inject = ['$http', '$q', 'API_KEY', 'API_URL'];

    angular.module('test.app').service('buscarMovieService', buscarMovieService);
})();