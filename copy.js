let dev1 = {
    name: 'Shubham'
}

let dev2 = dev1; // Simple assignment
dev2.name = 'Stanley';

console.log(dev1.name); // Stanley
console.log(dev2.name); // Stanley

// Lets make shallow copy
dev2 = Object.assign({}, dev1);
//OR
//dev2 = {...dev1}

dev1.name = 'Vishnu';

console.log(dev1.name); // Stanley
console.log(dev2.name); // Vishnu

// Nested Object Condition

let dev1Detail = {
    name: 'Vikas',
    skills: {
        primary: 'Full-Stack',
        secondary: 'DevOps'
    },
    calculateAge: function(params){
        return 30;
    },
    joiningDate: new Date()
}

let dev2Detail = {...dev1Detail}; // creating shallow copy of nested object
dev2Detail.name = 'Rohan';
dev2Detail.skills.primary = 'Front-End';

console.log(dev1Detail); 
console.log(dev2Detail); 

//O/p
// {
//     name: 'Vikas',
//     skills: {
//         primary: 'Front-end',
//         secondary: 'DevOps'
//     },
//     joiningDate: '2020-19-10..'
// }

// {
//     name: 'Rohan',
//     skills: {
//         primary: 'Front-end',
//         secondary: 'DevOps'
//     },
//     joiningDate: '2020-19-10..'
// }

// Let's create a Deep Copy
 let dev3Detail = JSON.parse(JSON.stringify(dev1Detail));


dev3Detail.name = 'Naruto';
dev3Detail.skills.primary = 'Back-End';

console.log(dev1Detail); 
console.log(dev3Detail); 

//O/p
// {
//     name: 'Vikas',
//     skills: {
//         primary: 'Front-end',
//         secondary: 'DevOps'
//     },
//     joiningDate: '2020-19-10..'
// }

// {
//     name: 'Naruto',
//     skills: {
//         primary: 'Back-end',
//         secondary: 'DevOps'
//     },
//     joiningDate: '2020-19-10..'
// }

// Here we successfully cloned neted properties as well, but we now the calculate age function is missing and also type of joining date has changed to string

//To overcome this, we use lodash library, and create deep copy with cloneDeep() method

