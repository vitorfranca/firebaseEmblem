app.config(function($stateProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: '/states/root.html',
      url: ""
    });
});
