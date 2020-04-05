 //refernce type

 var object1 = {value: 10};
var object2 = object1;
//when you define a variable as an object, you have a refernce point alread
// {} != {} but object1 === object2 such that object1.value = 13; will be same as object2.value
var object3 = {value: 10};


 //context vs scope, scope is created when it sees curly brackets

 const  object4 ={
    a: function (){
        console.log(this);

    }
}
// run with object4.a();

 //instantation - making instances or multiple copies of an object

 class Player{
     constructor(name, type){
         console.log(this);
         this.name = name;
         this.type = type;
     }
     introduce(){
         console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
     }
 }
  //meaning of above code -- this player will always be able to introduce itself and always have this name and this type
  // we use this so we can easily name and type property
// in order to make copies , always use constructor

class Wizard extends Player {
    constructor (name, type) {
// whenever you extend a class always user to define the parameters in order to have access to the main class values
        super (name,type)
        console.log('wizard', this); 

    }
    play() {
        console.log(`weeeee I'm a ${this.type}`);
    }
}

// to create a new wizard just do below
const wizard1 = new Wizard ('Shelly', 'Healer');
const wizard2 = new Wizard ('Shawn', 'Dark Magic');
 
/*
//old syntax called classical inheriatnce- old,
var Player = function(name, type){
        this.name = name;
        this.type = type;
    }

    Player.prototype.introduce = function(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }


var wizard1 = new Wizard ('Shelly', 'Healer');
var wizard2 = new Wizard ('Shawn', 'Dark Magic');
 

   wizard1.play = function() {
       console.log(`weeeee I'm a ${this.type}`);
   }
 
   wizard2.play = function() {
    console.log(`weeeee I'm a ${this.type}`);
}
*?/



































