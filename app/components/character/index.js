'use strict';

module.exports = angular.module('fire-emblem')
    .directive('character', function () {
        return {
            templateUrl: 'app/components/character/character.html',
            replace: true,
            scope: {
                character: "=data"
            }
        };
    });
