angular.module('cat-buddy.services', [])
.factory('Animals', function($http) {
  var getAllFromInternetByZipCode = function(animalName, zipCode, count, offset, scope) {
    offset = offset || 0;
    return $http.jsonp('http://api.petfinder.com/pet.find?' + 'key=' + PETFINDER_API_KEY + '&animal=' + animalName + '&location=' + zipCode + '&count=' + count + '&format=json' + '&offset=' + offset + '&callback=JSON_CALLBACK')
    .success(function(resp){
      scope.data.cats = resp.petfinder.pets.pet;
    })
    .error(function(err) {
      console.error.bind(console, 'Failed to get cats');
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

// return $http.jsonp('http://api.petfinder.com/pet.find?' + 'key=' + PETFINDER_API_KEY + '&animal=' + animalName + '&count=' + count + '&offset=' + offset + '&loation=' + zipCode + '&format=json&callback=JSON_CALLBACK')
