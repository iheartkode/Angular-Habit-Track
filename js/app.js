var App = angular.module("App", []);

App.controller("HabitsCtrl", function($scope) {
  $scope.totalCompleted = 0;
  $scope.habits = [
    
  ];

  $scope.up = function(habit) {
     habit.upCount += 1;
     habit.goal -= 1;
     if(habit.downCount > 0) {
       habit.downCount--;
     }
     if(habit.goal == 0) {
       habit.complete = true;
       $scope.totalCompleted++;
     }
  };
  $scope.down = function(habit) {
     habit.downCount += 1;
     habit.goal += 1;
  };
  $scope.delete = function(habit) {
    $scope.habits.splice($scope.habits.indexOf(habit), 1);
  };

  $scope.create = function(name, goal) {
    if(name) {
      $scope.habits.push({
        name: name,
        upCount: 0,
        downCount: 0,
        goal: goal
      }); 
    }else{
      alert("Can't be blank");
    }
    $scope.name = "";
    $scope.goal = 0;
    console.log($scope.habits)
  };
  
  
});
