
(function () {

    var verDetalleMovieService = function ($http, $q, API_KEY, API_URL) {
        var svc = this;
        var url = '/movie/';

        svc.getMovie = function (id_movie) {
            var defered = $q.defer();
            var params = {
                api_key: API_KEY,
                language: 'es-Es'
            };
            $http.get(API_URL + url + id_movie, { params: params }).then(function (Response) {
                defered.resolve(Response.data);
            }, function (Error) {
                defered.reject(Error);
            });
            return defered.promise;
        };

        return {
            getMovie: svc.getMovie
        };
    };

    verDetalleMovieService.$inject = ['$http', '$q', 'API_KEY', 'API_URL'];

    angular.module('test.app').service('verDetalleMovieService', verDetalleMovieService);
})();