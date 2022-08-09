import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemlate.js';
//
const from = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const text = document.querySelector('#text');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//
from.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(text.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(text.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Yoshi', age: 40 });
// let docTwo = addUID('shaun')
console.log(docOne.name);
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
//
