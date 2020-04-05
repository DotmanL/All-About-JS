// mouse event sample
//var button = document.getElementsByTagName("button")[0];

//button.addEventListener("click", function() {
  //  console.log("Click !!!!!");
// })



// improving events using the <input type form with enter

var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// start of additional code to shorten the long version

function inputLength(){
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    }


    function addListAfterClick(){
        if (inputLength() > 0 ) {
            createListElement();
        }
    
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13 ) {
        createListElement();
    }
    
}





     
button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)
 








/* Long version of the above code

//code for adding the new input to the bottom of the list
//using the click of the enter button


button.addEventListener("click", function (){
    if (input.value.length > 0 ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    }
}) 

// code for adding the new input to the bottom of the list
by just using the enter button
input.addEventListener("keypress", function (event){
    if (input.value.length > 0 && event.keyCode === 13 ) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    }
})   

*/ 

