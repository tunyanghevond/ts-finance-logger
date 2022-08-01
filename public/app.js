//  interfaces
const me = {
    name: 'Alex',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent, amount');
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(person.age);
};
greetPerson(me);
import Invoice from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
console.log(invoices);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
const from = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const text = document.querySelector('#text');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, text.value, details.value, amount.valueAsNumber);
});
