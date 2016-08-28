(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('HomeController', [HomeController]);

  function HomeController(){
    var self = this;
    self.data = 'DATA!!';
    console.log(self);
    console.log(self.data);

    self.returnNumber = function(){
      var num = 8;
      return num;
    };

    self.returnNumber();


  }

})();
