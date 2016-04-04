angular.module('cat-buddy.search-cats', [])

.controller('SearchCatsController', function ($scope, Animals) {
  $scope.cats = [];
  var offset = 0;
  var count = 10;

  $scope.newFindCatsByZipCode = function() {
    $scope.cats = [];
    Animals.getAllFromInternetByZipCode('cat', $scope.zipCode, count, 0, $scope);
    offset += count;
  };

  $scope.findCatsByZipCode = function() {
    Animals.getAllFromInternetByZipCode('cat', $scope.zipCode, count, offset, $scope);
    offset += count;
  };

  $scope.addCatToSaved = function(cat) {
    Animals.addOneToSaved(cat, 'cat')
      .catch(function(error) {
        console.error.bind(console, error);
      });
  };
});
