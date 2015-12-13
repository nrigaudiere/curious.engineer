aCuriousEngineer.controller('indexController', function ($scope, $http) {
  $scope.test = "Angular";
  $scope.display = true;

  $http.get("assets/json/projects.json").success(function(data) {
    $scope.projects = data;
    console.log($scope.projects);
	});

});