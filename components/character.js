app.directive('character', function() {
  return {
    templateUrl: 'components/character.html',
    controller: 'characterComponentCtrl',
    replace: false
  };
})
.controller('characterComponentCtrl', function($scope, characters, $stateParams){
  console.log(characters.get($stateParams.name));
});
