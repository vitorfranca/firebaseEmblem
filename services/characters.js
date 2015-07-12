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
    if (self.all && self.all.length) {
      return _(self.all).findWhere({
        name: name
      });
    } else {
      return firebase.get('characters/'+name);
    }
  };

  return self;
});
