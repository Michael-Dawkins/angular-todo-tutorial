/* We declare a controller on our todoApp application module
The name given here as first parameter is the name that should be used
in the html, like so : <body ng-controller="todoMainCtrl">
controller are defined using a function, this function's parameters are subject
to dependency injection, that means for exemple that angular
will provide you with the scope */
todoApp.controller("todoMainCtrl", function($scope){
    $scope.test = "Hello world"
});