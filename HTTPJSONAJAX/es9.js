//object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}


const { tiger, ...rest} =animals;

//function
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40

}

function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}


const { tiger, lion, ...rest} =animals;
objectSpread(tiger, lion, rest);



//New feature- finally , works with promise either it resolves or rejcts

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response=>response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
.finally(data => console.log('extra'));



//for await of


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

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await(let request of arrayOfPromises){
        const data =await request.json()
        console.log(data);
    }
}



























