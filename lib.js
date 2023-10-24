//named exports
export var a=10;
export function foo(){
    console.log("i am a lib")
    console.log(this);
}
let z=340;
let b=100;
export default b;
// export default z; //only one default export can be there

// setTimeout(()=>{
//     console.log(a);
// },2000)

// var a=10;
// function foo(){
//     console.log("i am a lib")
// }
// var a=10;
// function foo(){
//     console.log("i am a lib")
// }
// export let obj={a,foo}


// export v=100;