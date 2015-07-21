'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.skills.details', {
                url: "/name/:name",
                templateUrl: "/app/states/skills/details/skill.html"
            });
    });
