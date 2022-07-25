// let character = 'mario';
// let age = 30;
// let isBlackBelt = true;

// age = 50
//  age = 'asd' wrong


// const circ = (diameter:number) => {
//     return diameter * 3;
// }

// console.log(circ(5))


//  arrays

// let names = ['mario','murkest','john'];

// names.push('toad')
// console.log(names)


// let numbers = [10,25,30];

// numbers.push(25)
// numbers.push('asd')

// let mixed = ['ken',4, 'ryu',22];

// mixed.push('bunbu');
// mixed.push(10);


// objects

let obj = {
    name:'mario',
    belt:"black",
    age:30
}

// obj.age = 40;
// obj.name = 'John';
// obj.belt = false
//obj.skills = ['css','js']

//obj = []

// obj = {
//     name:'John',
//     age:40,
//     belt:'orange',
//     skills:[]
// }


//explicitly types

// let character:string;
// let age:number;
// let isLoading:boolean;


let array:string[] = [];

array.push('John');
// union types
let mixArray:(string | number)[] = [];

let uid:string|number|boolean;
uid='123';
uid = 123;
uid = false

let objOne:object;



