//asynchronous code with callbacks 

getUser('facebook/lawaldotun', (user, error) => {
    if(error) {
        throw (error)
    }
//run a get function from that api and we ruan a callback function
//if error, throws an eroor, if not it sets the user Id as below
//(user, error) -- callback function

const userId = user.id

getFriends(userId, (friends, error) => { 
    if (error) {
    throw(error)
}

const john = friends.find ('facebook/friends')

getPosts(john, (posts, error) => {
    if(error) {
        throw(error)
    }

    const recentPost = posts[0];

    getCommentsForPost(recentPost, (comments, error) =>{
        if (error) {
            throw(error)
        }

        displayComments(comments)
    })
})
})
})

//fetch
fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const firstUser =users[0];
    console.log(firstUser);
    return fetch (
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
})
.then(response => response.json()
.then(posts => console.log(posts)))
.catch(error => console.log(error))  


//writng above with asyncawait
// await pauses the function execution and awaits the response value 
// of the previous fetch functions

const myAsyncFunction = async () => {
    try {    
const usersResponse = await fetch('http://jsonplaceholder.typicode.com/users')
const users = await usersResponse.json();
const secondUser = users[1];

console.log(secondUser);

const postsRepsonse = await fetch 
('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id );

const posts = await postsRepsonse.json();

console.log(posts);
    } catch (error) {
        console.log ('there was an error')
    }
}; 
