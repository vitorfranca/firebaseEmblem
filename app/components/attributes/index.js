'use strict';

module.exports = angular.module('fire-emblem')
    .directive('attributes', function () {
        return {
            templateUrl: 'app/components/attributes/attributes.html',
            replace: false,
            scope: {
                attributes: "=data",
                percentage: "=?"
            }
        };
    });
