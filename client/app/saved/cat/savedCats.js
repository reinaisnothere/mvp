angular.module('cat-buddy.saved-cats', [])

.controller('SavedCatsController', function ($scope, Animals) {
  // Your code here
  var getAllSavedCats = function() {
    Animals.getAllFromSaved('cat')
      .then(function(cats) {
        $scope.cats = cats;
      })
      .catch(function(err) {
        console.error.bind(console, 'Failed to load saved cats :(');
      });
  };

  getAllSavedCats();
});
