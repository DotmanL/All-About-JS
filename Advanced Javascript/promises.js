
const myPromise = new Promise ((resolve, reject) => {
    if (true) {
    setTimeout(() => {
        resolve ('i have succeded');
    }, 1000)
} else {
    reject ('i have failed')
}
});

//myPromise.then(value => console.log(value))
//.catch(rejectValue => (console.log(rejectValue)))

// our succesfull api calls in the .then 
//failures returns in the .catch 

myPromise.then(value => value +"!!!!!")
.then(newvalue => console.log(newvalue))
.catch(rejectValue => (console.log(rejectValue)))
