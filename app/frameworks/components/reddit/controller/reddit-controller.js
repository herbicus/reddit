angular.module('redditModule').controller('redditController', ['$scope', 'RedditFactory', function ($scope, RedditFactory) {
  var ctrl = this;

  ctrl.reddit = new RedditFactory();

  ctrl.reddit.nextPage();



}]);
