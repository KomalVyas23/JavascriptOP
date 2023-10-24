// let num=100^10000;
// console.log(num);

// let bigNum=BigInt(100)^BigInt(10000);
// console.log(bigNum);

// console.log(1n+2n);
// // console.log(1n+2);
// console.log(1n+BigInt(2));
// console.log(Number(1n)+2);

// console.log(1n>2n);
// console.log(1n<2n);

//*******************Symbols*******************

// let id=Symbol();
//give symbol a description also know as sybol name
let id1=Symbol("id");
let id2=Symbol("id");
let id3=Symbol("id");
let id4=Symbol("id");
//symbols are gauranteed to be unique, even if all description names are same 
console.log(id1==id2);

let id=Symbol("id");
let dog={
    name:"Pluto",
    [id]:"Private"
}

dog[id]=1;
//symbols are accesible using [] notation only. because they are used to create hidden properties of an object
console.log(dog[id]);

//symbols are ignored in for in loop 
for(let key in dog){
    console.log(key);
}
let arr=Object.keys(dog)
console.log(arr);

let secretName=Symbol("name")
dog[id]="fake";
dog[secretName]="Agent Pluto"

delete dog[id]

console.log(dog);
