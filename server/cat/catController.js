var Cat = require(__dirname + './catModel.js');
var Q = require('q');

// Promisify a few mongoose methods with the `q` promise library
var findCat = Q.nbind(Cat.findOne, Cat);
var createCat = Q.nbind(Cat.create, Cat);
var findAllCats = Q.nbind(Cat.find, Cat);

module.exports = {

  allCats: function (req, res, next) {
    findAllCats({})
      .then(function(cats) {
        res.json(cats);
      })
      .fail(function(err)) {
        next(err);
      });
  },

  newCat: function (req, res, next) {
    var id = req.body.id;

    findCat({id: id})
      .then(function (match) {
        if (match) {
          res.json(match);
        } else {
          var createdCat = createCat(req.body);
          res.json(createdCat);
        }
      })
      .fail(function (err) {
        next(err);
      });
  }
};
