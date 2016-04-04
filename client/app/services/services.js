angular.module('cat-buddy.services', [])
.factory('Animals', function($http) {
  var getAllFromInternetByZipCode = function(animalName, zipCode, offset) {
    offset = offset || 0;
    return $http({
      method: 'GET',
      url: 'http://api.petfinder.com/pet.find',
      data: {
        key: 'bfa5c5839521c697c710edb7f23e7fb0', //to fix
        animal: animalName,
        count: 20,
        offset: offset,
        location: zipCode,
        format: 'json'
      }
    })
    .then(function(resp){
      return resp.petfinder.pets;
    });
  };

  var getAllFromSaved = function() {
    return $http({
      method: 'GET',
      url: '/api/' + animalName
    });
  };

  var addOneToSaved = function(animal) {
    return $http({
      method: 'POST',
      url: '/api/' + animalName,
      data: animal
    });
  };

  return {
    getAllFromInternetByZipCode: getAllFromInternetByZipCode,
    getAllFromSaved: getAllFromSaved,
    addOneToSaved: addOneToSaved
  };
});