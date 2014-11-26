todoApp.factory("TodoModel", function($rootScope, LocalStorage) {

    var todos;

    init();

    function init(){
        todos = LocalStorage.loadModel();
        if (todos === null)
        todos = [
            {
                name: "Buy some milk",
                id: 0,
                detail: "Buy some really fresh milk for the cake"
            }
        ];
    }

    function getTodos(){
        return todos;
    }

    function saveTodos(){
        LocalStorage.saveModel(todos);
    }

    return {
        getTodos: getTodos,
        saveTodos: saveTodos
    }
});

