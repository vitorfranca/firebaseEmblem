app.controller('testCtrl', function($scope, characters) {
    $scope.data = characters.all;

    $scope.sendToFirebase = function(data) {
        $scope.data.$add($scope.newData);
        $scope.newData = '';
    };
    $scope.remove = function(val) {
        $scope.data.$remove(val);
    };
});