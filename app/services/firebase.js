'use strict';

module.exports = function($firebaseObject, $http, $q) {
    // var ref = new Firebase("https://glowing-torch-2079.firebaseio.com/");

    this.getList = function(child) {
        // var childRef = ref.child(child);
        // return $firebaseObject(childRef);
        return $http.get('assets/data.json').then(function(data) {
            var result = data.data[child];
            result.$loaded = function () {
                return $q.when(result);
            };
            return result;
        });
    };

    this.get = function(path) {
        // return $firebaseObject(ref.child(path));
    }

    return this;
}
