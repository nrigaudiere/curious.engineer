aCuriousEngineer.controller('electronic.controller', function ($scope, $http) {
  $scope.display = true;

  $http.get("../assets/json/electronic.projects.json").success(function(data) {
    $scope.projects = data;
    console.log($scope.projects);
	});

});