angular.module('redditModule').service('redditService', ['$http', '$q', function($http, $q) {

  // assumes a node server running on port 9000
  // export PORT=9000
  //var SERVICE_URL_PREFIX = 'http://localhost:9000';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.nextPage = function(after) {
    var deferred = $q.defer();
    var url = 'http://api.reddit.com/hot?after=' + after + '&jsonp=JSON_CALLBACK';

    $http.jsonp(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);
