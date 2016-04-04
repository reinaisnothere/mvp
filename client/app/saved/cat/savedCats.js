angular.module('cat-buddy.saved-cats', [])

.controller('SavedCatsController', function ($scope, Animals) {
  // Your code here

  $scope.data = {};

  var initializeLinks = function () {
    Links.getAll()
      .then(function(links) {
        $scope.data.links = links;
      })
      .catch(function(error) {
        console.error(error);
      });
  };

});
