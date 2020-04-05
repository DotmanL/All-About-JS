// Advanced Arrays
const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach', double);

//map, filter, reduce methods

const mapArray = array.map(num => num * 2);

console.log ('map', mapArray);

// forEach just iterate the operations and doesn't create a new array  
// but map has a restriction on the operation always returns 
// element, it creates a new array. 
//always shorthen the code since its a single parameter, filter and map don't need return check video.
//Filter
 const filterArray = array.filter(num => num > 5)

 console.log("filter", filterArray);


 //Reduce, You can actually do filtering and mapping with reduce

 const reduceArray = array.reduce((accumulator, num) => {
     return accumulator + num
 }, 0); // starting number here is 0 and defined here

 console.log('reduce', reduceArray);
