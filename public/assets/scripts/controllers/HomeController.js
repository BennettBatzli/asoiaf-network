(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('HomeController', ['$http', HomeController]);

  function HomeController($http){
    var self = this;
    self.data = 'DATA!!';
    console.log(self);
    console.log(self.data);

    self.returnNumber = function(){
      var num = 8;
      return num;
    };

    self.returnNumber();

    (function () {
      $http.get('/character').then(function (response) {
        console.log('RESPONSE.data ::', response.data)
      });
    })();
  }

})();
