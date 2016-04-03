angular.module('cat-buddy', [
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/search/cats', {
      templateUrl: 'app/search/cat/searchCats.html',
      controller: ''
    })
    .when('/saved/cats', {
      templateUrl: 'app/saved/cat/savedCats.html',
      controller: ''
    })
    .otherwise({
      redirectTo: '/search/cats'
    });
});