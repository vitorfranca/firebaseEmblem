'use strict';

module.exports = angular.module('fire-emblem')
    .directive('character', function () {
        return {
            templateUrl: 'app/components/character/character.html',
            scope: {
                character: "=data"
            },
            controller: function ($scope) {
                console.log('character');
                console.log($scope.character);
            }
        };
    });
