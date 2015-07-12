app.service('firebase', function($firebaseArray, $firebaseObject) {
  var ref = new Firebase("https://glowing-torch-2079.firebaseio.com/");

  this.getList = function(child) {
    var childRef = ref.child(child);
    return $firebaseArray(childRef);
  };

  this.get = function (path) {
    return $firebaseObject(ref.child(path));
  }

  return this;
});
