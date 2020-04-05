// example of a promise
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Left'))


//Async await of the above function

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer (400, 'Left');
    await movePlayer (10, 'Right');
    await movePlayer (330, 'Left');
}
// Realistic example
//promise
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

//async
async function fetchUsers () {
   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
    const [users, posts, albums ] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
} catch (err){
    console.log('oops', err)
}
}
