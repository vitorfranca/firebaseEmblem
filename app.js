var app = angular.module('test', [
  "firebase",
  "ui.router"
])
.config(function($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true
  });
  $urlRouterProvider.otherwise("/");
});
