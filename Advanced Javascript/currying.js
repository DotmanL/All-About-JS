//currying

const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b
const curriedMultiplyBy5 = curriedMultiply(5)

//after a long time we can still use the curriedMultiply5

curriedMultiplyBy5(4)