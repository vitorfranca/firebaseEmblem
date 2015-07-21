'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.skills.list', {
                url: "/list",
                templateUrl: "/app/states/skills/list/skillsList.html",
                controller: function($scope, skills) {
                    $scope.skills = skills.all;
                }
            });
    });
