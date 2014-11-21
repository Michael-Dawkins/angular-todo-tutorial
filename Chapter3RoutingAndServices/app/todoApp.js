/* todoApp is a global javascript variable, that will hold a reference
* to our application module, named "todoApp", the empty array [] means
* out module doesn't depend on any other modules.
* It is considered bad practice to declare global variables everywhere else,
* but it is usefull in this case since we need a reference to our application
* in all files to declare new controllers, services and directives*/
todoApp = angular.module("todoApp", []);