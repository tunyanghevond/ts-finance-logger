import { Payment } from './classes/Payment.js'
import { Invoice } from './classes/Invoice.js'
import { HasFormatter } from './interface/HasFormatter.js'
import { ListTemplate } from './classes/ListTemlate.js'

//

const from = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const text = document.querySelector('#text') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
//

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)
//
from.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc = new Invoice(text.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(text.value, details.value, amount.valueAsNumber)
  }
  list.render(doc, type.value, 'end')
})

// GENERICS

// const addUID = <T extends {name:string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100)
//   return { ...obj, uid }
// }

// let docOne = addUID({ name: 'Yoshi', age: 40 })
// console.log(docOne.name);

// with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'shaun' },
// }

// const docFour: Resource<string[]> = {
//   uid: 1,
//   resourceName: 'shoppingList',
//   data: ['bread', 'milk'],
// }

// console.log(docThree, docFour)

// ENUMS

// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }

// console.log(docOne);
// console.log(docTwo);

// TUPLES
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];

// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
// tup[0] = 'ken';

// let student: [string, number];
//student = [23564, 'chun-li'];
// student = ['chun-li', 23564];
