angular.module('cat-buddy', [
  'ngRoute',
  'cat-buddy.services',
  'cat-buddy.search-cats',
  'cat-buddy.saved-cats'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/search/cats', {
      templateUrl: 'app/search/cat/searchCats.html',
      controller: 'SearchCatsController'
    })
    .when('/saved/cats', {
      templateUrl: 'app/saved/cat/savedCats.html',
      controller: 'SavedCatsController'
    })
    .otherwise({
      redirectTo: '/search/cats'
    });
});