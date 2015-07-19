'use strict';

module.exports = function($firebaseObject) {
    var ref = new Firebase("https://glowing-torch-2079.firebaseio.com/");

    this.getList = function(child) {
        var childRef = ref.child(child);
        return $firebaseObject(childRef);
    };

    this.get = function(path) {
        return $firebaseObject(ref.child(path));
    }

    return this;
}