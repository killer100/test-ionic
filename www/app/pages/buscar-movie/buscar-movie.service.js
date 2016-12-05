
(function () {

    var buscarMovieService = function ($http, $q) {
        var svc = this;
        var API_KEY = '1c256e6b722d005e6ec151d5e1c4b3a5';
        var url = 'https://api.themoviedb.org/3/search/movie';

        svc.searchMovie = function (title, page) {
            var defered = $q.defer();
            var params = {
                api_key: API_KEY,
                page: page,
                query: title,
                language: 'es'
            };
            $http.get(url, { params: params }).then(function (Response) {
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

    buscarMovieService.$inject = ['$http', '$q'];

    angular.module('test.app').service('buscarMovieService', buscarMovieService);
})();