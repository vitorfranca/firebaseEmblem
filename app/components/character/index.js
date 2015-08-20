'use strict';

module.exports = angular.module('fire-emblem')
    .directive('character', function () {
        return {
            templateUrl: 'app/components/character/character.html',
            replace: true,
            scope: {
                character: "=data",
                name: "=?"
            },
            controller: function($scope, characters) {
                if ($scope.name && !$scope.character) {
                    characters.get($scope.name).then(function(data) {
                        $scope.character = data;
                    });
                }
            }
        };
    });
