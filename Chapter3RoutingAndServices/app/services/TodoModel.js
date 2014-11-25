todoApp.factory("TodoModel", function() {

    var todos;

    init();

    function init(){
        todos = [
            {
                name: "Buy some milk",
                id: 0,
                detail: "Buy some really freash milk for the cake"
            },
            {
                name: "Learn Angular.js",
                id: 1,
                detail: "It could be really awesome"
            },
            {
                name: "Take out the dog",
                id: 2,
                detail: "Because 42"
            }
        ];
    }

    function getTodos(){
        return todos;
    }

    return {
        getTodos: getTodos
    }
});

