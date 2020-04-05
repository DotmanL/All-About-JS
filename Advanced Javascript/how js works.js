// call stack
console.log ('1');
console.log ('2');
console.log ('3');
// a single threaded language executes the codes line by line

//recursion
function foo (){
    foo ()
}

//asynchronous programming 
console.log ('1');
setTimeout (() => {
    console.log('2');
}, 2000)
console.log ('3'); 

 
// call stack



//web api

//callback queue

//event loop
element.addEventListener ('click', () => {
    console.log('click')
})