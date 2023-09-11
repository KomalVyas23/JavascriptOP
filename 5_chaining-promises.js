// let promise=new Promise(function(resolve,reject){
//     setTimeout(()=>resolve(10),2000);
// })

// promise.then(function(val){
//     console.log(val)
//     return val*2;
// })
// .then(function(valFromAbove){
//     console.log(valFromAbove);
//     // return valFromAbove*2
//     let doubleValPromise=new Promise(function(resolve,reject){
//         resolve(valFromAbove*2)
//     })
//     return doubleValPromise;
// })
// .then(function(valFromAbove){
//     console.log(valFromAbove);
//     return valFromAbove*2
// })
// .then(function(valFromAbove){
//     console.log(valFromAbove);
// })
// .catch(function(err){
//     console.log(err);
// })

const fs=require('fs');
const readAllFilesPromise=fs.promises.readFile('./f1.txt');

readAllFilesPromise.then(function(data){
    console.log(data+"");
    return fs.promises.readFile('./f2.txt');
})
.then(function(data){
    console.log(data+"");
    return fs.promises.readFile('./f3.txt');
})
.then(function(data){
    console.log(data+"");
})
.catch(function(err){
    console.log(err);
})


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    console.log(result); 
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result);
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result); 
    return result * 2;
  });