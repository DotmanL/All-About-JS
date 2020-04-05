// let = const
/*
const player ="bobby";
let experience = 100;
let wizardLevel = false;

if (experience = 90) {
    let wizardLevel = true; 
}  


//change property of object

const obj ={
    player:"bobby",
    experience: 100,
    wizardLevel: false
}
change property with eg: obj.wizardLevel = true; 

*/




//Destructuring

/*
const obj ={
    player:"bobby",
    experience: 100,
    wizardLevel: false
}
const player = obj.player;
const player = obj.experience;  
let wizardLevel = obj.wizardLevel;

// you can do the first two lines above with this code below

const {player, experience} = obj;
let {wizardLevel} = obj; 
*/





//Object Properties
/*
const name = "john snow";

const obj = {
    [name]: "hello",
    [1 + 2]: "hihi",

} */
// if property and value are the samen write like below

const a = "simon";
const b = "true"
const c = ();

const obj = {
    a, 
    b,  
    c
}


 // Template Strings
// helps in reducing quotes when writing out a long string, eg:
//use back ticks ``, it is directly above the tab button
/*
const name = "sally";
const age = "14";
const pet = "horse";

 const greeting = `Hello ${name} you seem to be ${age-10}.
  What a lovely ${pet} you have `; 
*/
//default arguments
/*
function greet (name='', age = 30, pet ='cat') {
   return `Hello ${name} you seem to be ${age-10}.
  What a lovely ${pet} you have `; 
}
 //run with greet();
 //or add with greet("dotun", 23, "dog");
*/



//js type symbol creates unique types, reduces bugs

/*
 let sym1 = Symbol();
 let sym2 = Symbol('foo');
 let sym3 = Symbol('foo');
 //eg: run with sym1 or sym2 === sym3 gives false
*/

//arrow functions
/*
//old style
function add (a, b){
    return a + b;
}
//new style
const add =(a, b) => a + b; 
run with add (a,b)
*/








 















