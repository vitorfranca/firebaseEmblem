'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.classes', {
                abstract: true,
                template: '<ui-view/>',
                url: "/classes"
            });
    });

require('./list');
require('./details');
