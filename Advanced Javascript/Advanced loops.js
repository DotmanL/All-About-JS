const basket = ["apples", "oranges", "grapes"];

//normal for loops
for (let i = 0; i<basket.length; i++) {
    console.log(basket[i]);
}

//normal for each loops
basket.forEach(item => {
    console.log(item);
})

//new loops - for of-
//we are iterating- we can iterate over arrays or strings
for (item of basket){
    console.log(item);
}

//for in - works with objects - allows us to loop o ver and check object properties
//we are enumerating

const detailedBasket ={
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in detailedBasket){
    console.log(item)
}

