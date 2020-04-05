
/* Scope
var fun = 5;

function funFunction (){
    var fun = "Hellooo"; 
console.log(1, fun);
}


function funerFunction (){
    var fun = "Byeee"; 
console.log(2, fun);

}


function funestFunction (){
    var fun = "Ahhhh"; 
console.log(3, fun);
}

console.log("window", fun);
funFunction ();
funerFunction ();
funestFunction (); 

//we have overriden the first two functions with this code
//hence console.log(fun); brings out onnly AHHHH  */

/* Advanced JS */

//TENARY OPERATOR

function isUserValid(bool) {
    return bool;
}

var answer =isUserValid(true) ? "You may enter" : "Access Denied"
 
var automatedAnswer =
"Your account # is " + (isUserValid(false) ? "1234" : "not available"); 

// Switch

function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
        whatHappens = "you enter a monster";
        break;
        case "back":
            whatHappens = "you arrive home";
            break;
            case "right":
                whatHappens = "you found a river";
                break;
                case "left":
                    whatHappens = "you run into a troll";
                    break;
                    default:
                        whatHappens ="please enter a valid direction"
            
    }
    return whatHappens;
}
