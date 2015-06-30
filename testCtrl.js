app.controller('testCtrl', function($scope, characters, skills, classes) {
    $scope.characters = characters.all;
    $scope.skills = skills.all;
    $scope.classes = classes.all;
});