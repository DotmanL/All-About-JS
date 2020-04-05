// define database array with objects//
var database = [
    {
        username: "dotman",
        password: "secret",
    },
];
// define newsfeed array with objects//
var newsFeed = [
    {
    username: "ayodeji",
    timeline: "tired of soo much learning",
    },
    {
        username: "lanre",
        timeline: "mes que un club",

    },
     
];
// create userName and password pop up //
var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

//define signIn function//
function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password){
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and passwrod! ");
            
                
            }

    }
    //call function//
    signIn(userNamePrompt, passwordPrompt);