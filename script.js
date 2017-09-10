console.log("hullo");

var application = angular.module('application', []);

application.controller('Test', ['$scope', '$http', function (scope, http){
console.log("angular loaded");

}]);
