//ES7
//includes()
 const pets = ["cat", "dog", "bat"];
  //run
  pets.includes("dog")

//exponential operator

const square = (x) => x**2
//run square (2)
const cube = (y) => y**3
//run cube (3)


//ES8
.padStart()
.padEnd()
//eg "Turtle".padStart(10); gives "     Turtle"

//trailing commas in function's parameter list and calls, eg:

const fun = (
    a,
    b,
    c,
    d,
    ) => {
    console.log(a);
}
//run 
fun (1,2,3,4) 



//old syntax - do something similar to arrays but on objects
//Object.keys

let obj = {
    username0: "santa",
    username1: "rudolf",
    username2: "Mr_grinch"
}

Object.keys(obj).forEach((key, index) => {
    console.log(key,obj[key]);
})

// New Syntax - this is better
//Object.values
Object.values(obj).forEach(value => {
    console.log(value);

})


//Object.entries
Object.entries(obj).forEach(value => {
    console.log(value);

})

// assuming a real scenario recieveing data from backend

Object.entries(obj).map(value =>{
    return value [1] + value[0].replace('username', '')
})












































