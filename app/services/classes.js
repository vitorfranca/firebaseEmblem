app.service('classes', function(firebase, skills, $q) {
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
        return self.get(className).then(function(klass) {
            var promises = klass.skills.map(function(skill) {
                return skills.get(skill);
            });

            return $q.all(promises)
                .then(function(skillz) {
                    return skillz;
                });
        });;
    };

    return self;
});