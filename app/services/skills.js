app.service('skills', function(firebase) {
    var self = this;

    self.all = firebase.getList('skills');

    self.remove = function(val) {
        return self.all.$remove(val);
    };

    self.add = function(val) {
        return self.all.$add(val);
    };

    return self;
});