app.directive('character', function() {
  return {
    templateUrl: 'components/character.html',
    controller: 'characterComponentsCtrl',
    replace: false
  };
})
.controller('characterComponentsCtrl', function($scope, characters, $stateParams){
  console.log(characters.all);
  console.log($stateParams.name);
  console.log(characters.get($stateParams.name));
});
