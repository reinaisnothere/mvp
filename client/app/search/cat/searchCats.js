angular.module('cat-buddy.search-cats', [])

.controller('SearchCatsController', function ($scope, Animals) {
  // Your code here

  $scope.data = {};
  var offset = 0;

  $scope.findCatsByZipCode = function() {
    Animals.getAllFromInternetByZipCode('cat', $scope.zipCode, 20, offset)
      .then(function(cats) {
        $scope.data.cats = cats;
      })
      .catch(function(error) {
        console.error.bind(console, error);
      });
    offset += 20;
  };

  $scope.addCatToSaved = function(cat) {
    Animals.addOneToSaved(cat)
      .catch(function(error) {
        console.error.bind(console, error);
      });
  };
});
