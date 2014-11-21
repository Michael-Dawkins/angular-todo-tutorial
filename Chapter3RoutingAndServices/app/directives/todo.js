//Define a new directive on our todoApp module by using the
//directive method. Its name must be camelCase, but it will be kebal-case
//in the html, since html is not case sensitive
//for example, myDirective would become my-directive in the html
todoApp.directive("todo", function(){
    //a directive is created thanks to a directive definition object
    //which is return by the function
   return {
       //Use 'E' to use the directive as a html element, like so <todo></todo>
       //You can also use 'A' to use it as an html attribute, like so <div todo></div>
       restrict : 'E',
       //The directive will have it own scope for its data bindings, this scope is ISOLATED
       //it means it won't have access to its parent scope, that is our application controller's scope
       scope:{
           //the scope will be given a todo property,
           //The = sign indicates a two way data binding
           //Use this if you need bidirectional binding from the directive to the controller
           //You may also pass references to functions, that is what we do here
           todo: '=',
           //The scope will be given a deleteTodo property.
           //The name specified next to the = sign indicates the html attribute name to use
           deleteTodo: '=onDelete'
       },
       //We can give a template to our directive. In this case, <todo></todo> will be replaced by
       //the following template
       template: '<div class="todo">{{todo.name}}</div>' +
           '<button ng-click="deleteTodo(todo.id)" class="btn btn-default delete-button">' +
           '&#10004;' +
           '</button>',
       //Put all directive logic in the link function
       //Since this link is NOT subject to angular dependency injection, the three parameters
       //it takes are always : the scope, the html element bound to the directive and the html attributes
       //We write scope without the $ sign to mark the fact that this is not dependency injected.
       //We could as well name it myBeautifulScope if we wanted
       link: function(scope, element, attrs){
           //You can expose data and function on the scope in this link function
           //The same way you would in a regular application controller
           //In this case, we don't need any more than what our template and angular directives
           //provides us
       }
   }
});