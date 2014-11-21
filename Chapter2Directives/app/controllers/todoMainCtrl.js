/* We declare a controller on our todoApp application module
The name given here as first parameter is the name that should be used
in the html, like so : <body ng-controller="todoMainCtrl">
controller are defined using a function, this function's parameters are subject
to dependency injection, that means for exemple that angular
will provide you with the scope */
todoApp.controller("todoMainCtrl", function($scope){
    //It is a good practise to have an init function in controllers
    //and services to have a clear separation between initialization code
    //method implementations
    init();

    //This is not enforced by angular, but init is a good place
    //to expose data and functions on the scope
    //Everything that is exposed on the scope can be accessed by you templates (.html files)
    function init(){
        $scope.todos = [
            {
                name: "Buy some milk",
                id: 0
            },
            {
                name: "Learn Angular.js",
                id: 1
            },
            {
                name: "Take out the dog",
                id: 2
            }
        ];

        $scope.newTodo = {
            name: ""
        };
        $scope.addTodo = addTodo;
        $scope.deleteTodo = deleteTodo;
    }

    function addTodo(todoName){
        //using underscore library's max function to easily find the maximum
        //id in the todos array
        var maxId = _.max($scope.todos, function(todo){
            return todo.id
        }).id;
        if (_.isUndefined(maxId)){
            maxId = -1;
        }
        $scope.todos.push(
            {
                name: todoName,
                id: maxId + 1
            }
        );
        $scope.newTodo.name = "";
    }

    function deleteTodo(todoId){
        //using underscore library's reject function to create an array WIHTOUT
        //the element that satisfies our predicate, here being equals to the given id
        $scope.todos = _.reject($scope.todos, function(todo){
            return todo.id === todoId;
        })
    }

});