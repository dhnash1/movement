console.log("hullo");

var application = angular.module('application', []);

application.controller('Test', ['$scope', '$http', function ($scope, $http){
  console.log("angular loaded");
  var xMax;
  var yMax;
  $scope.start = function(){
    console.log("starting");
    xMax = $scope.x;
    console.log(xMax);
    yMax = $scope.y;
    console.log(yMax);
    var xPos = Math.round(0.5 * xMax);
    var yPos = Math.round(0.5 * yMax);
    console.log("x:" + xPos + " Y:" + yPos);

    $scope.move = function(dir){
      console.log(dir);
      if (dir == "up" && yPos < yMax){
        yPos= yPos+1;
        console.log("x:" + xPos + " Y:" + yPos);
      } else if (dir == "down" && yPos > 0){
        yPos = yPos - 1;
        console.log("x:" + xPos + " Y:" + yPos);
      } else if(dir == "left" && xPos > 0){
        xPos = xPos - 1;
        console.log("x:" + xPos + " Y:" + yPos);
      } else if (dir == "right" && xPos < xMax){
        xPos = xPos + 1;
        console.log("x:" + xPos + " Y:" + yPos);
      }
       else {
        console.log("wall");
      }
    };
  };
  $scope.tog = "On";
  var tf = "true";
$scope.printy = function(){
  if (tf){
    console.log("Im a boy");
  } else{
    console.log("and I like playing with my toy");
  }
};
$scope.toggle = function (){
  if (tf) {
      console.log("toggle False");
    tf = false;
    $scope.tog = "Off";
  } else if(!tf){
      console.log("toggle True");
    tf = true;
    $scope.tog = "On";
  }
};

$scope.movement = function(){

};
}]);
