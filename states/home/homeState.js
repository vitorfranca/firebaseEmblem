app.config(function($stateProvider) {
  $stateProvider
    .state('root.home', {
      url: "/",
      templateUrl: "states/home/home.html"
    });
});
