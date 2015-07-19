'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.characters', {
                abstract: true,
                template: '<ui-view/>',
                url: "/characters"
            });
    });

require('./list');
require('./details');