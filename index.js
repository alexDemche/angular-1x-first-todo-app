angular.module("todoApp", [])
  .controller('todoAppCtrl', ($scope) => {
    $scope.currentTaskInput = '';
    $scope.tasks = [];
    $scope.countOfTasks = $scope.tasks.length;

    $scope.addTask = () => {
      $scope.currentTaskInput
        ? $scope.tasks.push($scope.currentTaskInput)
        : '';

      $scope.countOfTasks++;
      $scope.currentTaskInput = '';
    }

    $scope.deleteTask = (task) => {
      let indx = $scope.tasks.indexOf(task);

      $scope.tasks.splice(indx, 1);
      $scope.countOfTasks--;
    }
  })