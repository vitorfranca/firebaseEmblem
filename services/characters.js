app.service('characters', function(firebase) {
  var self = this;

  self.all = firebase.getList('characters');

  self.remove = function(val) {
    return self.all.$remove(val);
  };

  self.add = function(val) {
    return self.all.$add(val);
  };

  self.get = function(name) {
    return _(self.all).findWhere({
      name: name
    });
  };

  return self;
});
