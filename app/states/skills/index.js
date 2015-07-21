'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.skills', {
                abstract: true,
                template: '<ui-view/>',
                url: "/skills"
            });
    });

require('./list');
require('./details');
