const { log } = require('console');
const fs=require('fs')

// let promise=new Promise(function(resolve,reject){

// })

//executor function(Google HR) -> are called automatically as soon as new promise is created 
//this produces a result-> resolved(value)
// rejected(err)

let promise = new Promise(function (resolve, reject) {
    //performed some operation here
    // let num=Math.floor(Math.random()*10);
    // if(num%2==0){
    //     resolve(num)
    // }
    // else reject("Odd number received")

    //this is emulating an api call which is getting some data from db
    // let res=fetch(url);
    setTimeout(()=>resolve("data received from DB"),4000)
    setTimeout(()=>resolve("data received from DB"),4000)
    setTimeout(()=>resolve("data received from DB"),4000)
setTimeout(() => reject("DB connection error"), 4000)
})
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
// console.log(promise);

promise.then(function (data) {
    console.log(data);
    console.log(promise);
}, function (err) {
    console.log(err);
    console.log(promise);
})

// promise.catch(function (err) {
//     console.log(err);
//     console.log(promise);
// })




const fileReadPromise=fs.promises.readFile('./f11.txt');
console.log(fileReadPromise);

fileReadPromise.then(function(data){
    console.log(data+"");
})
fileReadPromise.catch(function(err){
    console.log(err);
})


