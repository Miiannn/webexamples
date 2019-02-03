
// Defind a function, and call it.
void function sayHello()  {
  console.log("Hello Everyone");
}();

try  {
  // This function does not exist.
  sayHello();
}
catch(e)  {
  console.log(e); // ReferenceError: sayHello is not defined
}
