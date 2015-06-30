app.service('firebase', function($firebaseArray) {
    var ref = new Firebase("https://glowing-torch-2079.firebaseio.com/");

    this.getList = function(child) {
        var childRef = ref.child(child);
        return $firebaseArray(childRef);
    };

    return this;
});