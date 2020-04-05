// define database array with objects
var database = [
    {
        username: "dotman",
        password: "secret",
    },
    {
        username: "dotun",
        password: "secret2",
    },
    {
        username: "dorange",
        password: "secret3",
    },
];
// define newsfeed array with objects
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



// define function loops and several users

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else{
        alert("Sorry, wrong username and password");
    }
}

// create userName and password pop up 
var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

//call function
signIn(userNamePrompt, passwordPrompt);


//defineed signIn function for just one user in database
//function signIn(username, password) {
// if (username === database[0].username && 
//   password === database[0].password){
//     console.log(newsFeed);
// } else {
//   alert("Sorry, wrong username and passwrod! ");


// }

//  }



