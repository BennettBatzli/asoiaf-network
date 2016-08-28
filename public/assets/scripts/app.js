angular.module('myApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: '../../views/templates/partial-home.html'
      })

      .state('home.list', {
        url: '/list',
        templateUrl: '../../views/templates/partial-home-list.html',
        controller: function($scope) {
          console.log('did it work');
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })

      // nested list with just some random string data
      .state('home.paragraph', {
        url: '/paragraph',
        templateUrl: '../../views/templates/partial-home-paragraph.html',
        controller: 'HomeController as home'
      })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('about', {
        // we'll get to this in a bit
      });
  });
