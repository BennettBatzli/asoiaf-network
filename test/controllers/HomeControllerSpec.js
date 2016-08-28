// Describe out test: we are testing the HomeController
describe('Controller: HomeController', function() {

  beforeEach(module('myApp'));

  var cut; // short for Controller Under Test

  // Access the angular $controller service before each test
  beforeEach(inject(function($controller) {
    // injecting this service allows us to create an instance of our controller
    cut = $controller('HomeController');
  }));

  it('should be equal to 8', function(){
    expect(cut.returnNumber()).toEqual(8);
  });




});