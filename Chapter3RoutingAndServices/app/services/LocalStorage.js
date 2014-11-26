todoApp.factory("LocalStorage", function() {

    function saveModel(model){
        localStorage.setItem("todos", JSON.stringify(angular.copy(model)));
    }

    function loadModel(){
        return JSON.parse(localStorage.getItem("todos"));
    }

    return {
        saveModel: saveModel,
        loadModel: loadModel
    }
});