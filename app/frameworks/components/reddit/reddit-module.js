angular.module('redditModule', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'infinite-scroll']);

angular.module('redditModule').config(function ($stateProvider) {

  $stateProvider.state('reddit', {
    url: '/reddit',
    templateUrl: 'app/frameworks/components/reddit/view/reddit-view.html',
    controller: 'redditController',
    controllerAs: 'redditCtrl'

  });
  /* Add New States Above */

});
