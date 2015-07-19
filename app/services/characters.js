'use strict';

module.exports = function(firebase, classes, $q, _) {
    var self = this;

    self.all = firebase.getList('characters');

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

    self.getFullClassSet = function(name) {
        return self.get(name).then(function(character) {
            var promises = character.classSet.map(function(className) {
                return classes.get(className);
            });

            return $q.all(promises).then(function(klasses) {
                return _.chain(klasses.map(function(klass) {
                        return [klass.name, klass.promote];
                    }))
                    .flatten()
                    .compact()
                    .uniq()
                    .value();
            });
        });
    };

    self.getFullSkillSet = function(name) {
        return self.getFullClassSet(name)
            .then(function(klasses) {
                var promises = klasses.map(function(klassName) {
                    return classes.getSkills(klassName);
                });

                return $q.all(promises)
                    .then(function(skills) {
                        return _.flatten(skills);
                        return _.chain(skills)
                            .flatten()
                            .compact()
                            .uniq()
                            .value();
                    });
            });
    }

    return self;
}