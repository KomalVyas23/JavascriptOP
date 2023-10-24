const user={
    firstName:"Sanjeev",
    lastName:"Kumar",
    email:"sanjeev_cool_dude@gmail.com"
}
//get trap
const handler={
    get(target,property){
        console.log(`Property ${property} has been read`);
        if(property=='fullName'){
            return `${target.firstName} ${target.lastName}`
        }
        return target[property];
    },
    set(target,property,value){
        if(property=="age"){
            if(typeof value !='number'){
                throw new Error("Age must be a number")
            }
            if(value<18){
                throw new Error("The user must be 18 years or older")
            }
        }
        target[property]=value;
    }
}

const proxyUser=new Proxy(user,handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);
console.log(user.lastName);

// proxyUser.lastName="Kohli";
// console.log(proxyUser.lastName);

console.log(proxyUser.fullName);
console.log(user.fullName);


//set trap
// proxyUser.age="12";
// proxyUser.age=12;

proxyUser.a=10;
