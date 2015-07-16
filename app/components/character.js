app.directive('character', function() {
    return {
        templateUrl: '/app/components/character.html',
        controller: 'characterComponentCtrl',
        replace: false
    };
})
    .controller('characterComponentCtrl', function($scope, characters, $stateParams) {
        $scope.character = characters.get($stateParams.name);
    });