//Closures- a function ran, the function executed, Its never going to execute
//again but its going to remeber that there are refrences to those variablesa
// so the child scope always has access to the parent scope


const first = () => {
    const greet = "HI";
    const second = () => {
        alert(greet);

    }
    return second;
}

const newFunc = first();
newFunc();


//Currying -process of converting a function that takes multiple
//arguments into a function that takes them one at a time

const multiply = (a, b) => a * b;
const curriedMutiply = (a) => (b) => a * b;
curriedMutiply(3);
// to multiply a anytime by 5 just see the code below


const multiply = (a, b) => a * b;
const curriedMutiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMutiply(3);
// run main code, then run multiplyBy5(5);


// Compose - is the act of putting two functions together to form
// a third function where the ouput of one function is the input
// of the other

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose (sum, sum)(5);

//when you run this above code, you get 7

// Avoiding side effects and functional purity - eg Side Effects: avoiding changing
// the already defined variable from a function, Functional purity - always want to return a value.
// this creates something called  "deterministic" no matter the input in the parametes, it 
// always returns a value

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, 
// or data, change during a program’s execution. It must only depend on its input elements.

 