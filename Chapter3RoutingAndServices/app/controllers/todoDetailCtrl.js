todoApp.controller("todoDetailCtrl", function($scope, $state, TodoModel){

    init();

    function init(){
        var todoId = parseFloat($state.params.id);
        $scope.todo = _.findWhere(TodoModel.getTodos(), {id: todoId});
        $scope.goToMainView = goToMainView;
    }

    function goToMainView(){
        $state.go('todo');
    }
});