//Methods that can be used on arrays
//Arrays are indexed from 0
//eg [1, 2, 3, 4] will be numbered as 0 1 2 3
// Javascript 6 Primitve types
// String - "this is a string"
// boolean - true or false
// null - null
// undefined - undefined
// number - 1 2 3 ...
// symbol -


//1 map ();

const myArray = [1, 2, 3, 4]

//increase the values of each value in the array
myArray.map(el  => el + 2)
//returns below
[3, 4, 5, 6]

// just to return b  in our Array
myArray.map(() => "b")
//returns below
 [1, 2, 3, 4]




//2 filter();
//similar to map
const myArray =[1, 3, 5, 7, 9]
myArray.filter(el => el > 4)

//returns below 
[5, 7, 9]


//3 includes();
// a method that takes a single argument and checks if it existe in an array
//example 1
const myArray = [1, 2, 3, 4, 5]
myArray.includes(3)
//returns
true
//example 2

//this .includes below checks if the array contains
// number 2 from the array index of 3
myArray.includes(2, 3)
//returns
false

//example 3
//object is anything that is not of the 6  javascript primitives
//objects are collections of properties that has values 
//objects are seen as a new refermce in JS memory bank
// no matter how the props are modifiied in objects, they still pont to the same object in memory
const obj1 = {id: 1} 
const obj2 = {id: 1}
obj1 === obj2
//returns
false

//example 4
const o1 = {id: 1}
const o2 = {id: 2}
const o3 = {id: 3}
const newestArray = [o1, o2, o3]
newestArray
//returns
 {id: 1}
 {id: 2}
 {id: 3}
 //so using includes now
 newestArray.includes(o1)
//returns 
true


//4 find();
const myArray = [1, 3, 5, 7, 9]
myArray.find(el => el === 5)
//returns 
5
myArray.find(el => el > 4)
//returns, doesnt keep going
5

//exapmle 2
const peopleArray = [{id: 1}, {id: 4}, {id: 7},]
peopleArray.find(person => person.id === 4)
//returns
{id: 4}

//reduce();
// we want to do two things: end up with one value or
// when we want to persit the return or outcome of each 
// susbsequent iteration of array
// reduce has two arguments: a function and a starting value
// which is 0 as written in the example below

//example 1
const array = [1, 2, 3, 4, 5]
array.reduce((accumulator, currentElement) => 
accumulator + currentElement, 0) 
//returns 
15

