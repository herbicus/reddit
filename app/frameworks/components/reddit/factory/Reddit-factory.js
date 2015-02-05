angular.module('redditModule').factory('RedditFactory', ['redditService', function(redditService) {

  var Reddit = function() {
    this.items = [];
    this.busy = false;
    this.after = '';

    this.nextPage = function(){
      var self = this;
      if(this.busy){
        return;
      }
      this.busy = true;

      redditService.nextPage(this.after)
        .then(function(data){
          var results = data.data.children;
          angular.forEach(results, function(item){
            self.items.push(item.data);
          });
          self.after = 't3_' + self.items[ self.items.length - 1 ].id;
          self.busy = false;
        });
    };
  };


  return Reddit;
}]);
