app.directive('character', function() {
    return {
        templateUrl: '/app/components/character.html',
        controller: 'characterComponentCtrl',
        replace: false
    };
})
    .controller('characterComponentCtrl', function($scope, characters, $stateParams) {
        characters.get($stateParams.name).then(function(data) {
            $scope.character = data;
        });

        characters.getFullClassSet($stateParams.name).then(function(data) {
            $scope.classSet = data;
        });
    });