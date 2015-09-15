var app = angular.module('timeApp').directive('showTime', function(){

  return {
    template: "  <h1> Hey there {{bryan}}!</h1> <div> The current time is {{time}} </div>",
    restrict: "E",
    //link is where you want to put all your dom manipulation
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }

  };

});
