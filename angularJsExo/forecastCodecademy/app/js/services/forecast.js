(function() {
  'use strict';

  angular
    .module('forecastApp')
    .factory('forecast', forecast);

  function forecast($http) {
    return $http.get(
        'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json'
      )
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }

})();
