angular.module('cat-buddy.services', [])
.factory('Animals', function($http) {
  var getAllFromInternetByZipCode = function(animalName, zipCode, count, offset, scope) {
    offset = offset || 0;
    return $http.jsonp('http://api.petfinder.com/pet.find?' + 'key=' + PETFINDER_API_KEY + '&animal=' + animalName + '&location=' + zipCode + '&count=' + count + '&format=json' + '&offset=' + offset + '&callback=JSON_CALLBACK')
    .success(function(resp) {
      var cats = resp.petfinder.pets.pet;
      scope.data.cats = [];
      for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        if (cat.media.photos && cat.contact) {
          var simplifiedCat = {
            id: cat.id['$t'],
            name: cat.name['$t'],
            age: cat.age['$t'],
            description: cat.description['$t'],
            photo: cat.media.photos.photo[3]['$t'],
            'contact-name': cat.contact.name ? cat.contact.name['$t'] : '',
            phone: cat.contact.phone ? cat.contact.phone['$t'] : '',
            email: cat.contact.email ? cat.contact.email['$t'] : '',
            zip: cat.contact.zip['$t']
          };
          scope.data.cats.push(simplifiedCat);
        }
      }
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