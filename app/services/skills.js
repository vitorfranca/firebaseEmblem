'use strict';

module.exports = function(firebase) {
    var self = this;

    self.all = firebase.getList('skills');

    self.remove = function(val) {
        return self.all.$remove(val);
    };

    self.add = function(val) {
        return self.all.$add(val);
    };

    self.get = function(name) {
        return self.all.$loaded()
            .then(function(data) {
                return data[name];
            });
    };

    return self;
}