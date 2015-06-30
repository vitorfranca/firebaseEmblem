app.service('classes', function(firebase) {
    var self = this;

    self.all = firebase.getList('classes');

    self.remove = function(val) {
        return self.all.$remove(val);
    };

    self.add = function(val) {
        return self.all.$add(val);
    };

    return self;
});