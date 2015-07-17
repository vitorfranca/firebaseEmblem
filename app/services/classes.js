app.service('classes', function(firebase, skills) {
    var self = this;

    self.all = firebase.getList('classes');

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

    self.getSkills = function(className) {
        var klass = self.get(className);
        return klass.skills.map(function(skill) {
            return skills.get(skill);
        });
    };

    return self;
});