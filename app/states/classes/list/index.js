'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.classes.list', {
                url: "/list",
                templateUrl: "/app/states/classes/list/classesList.html",
                controller: function($scope, classes) {
                    $scope.classes = classes.all;
                }
            });
    });
