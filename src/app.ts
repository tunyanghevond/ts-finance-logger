//  interfaces

interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: IsPerson = {
  name: 'Alex',
  age: 30,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log('I spent, amount')
    return amount
  },
}

const greetPerson = (person: IsPerson) => {
  console.log(person.age)
}
greetPerson(me)

import Invoice from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

console.log(invOne, invTwo)

let invoices: Invoice[] = []

invoices.push(invOne)
console.log(invoices)
invoices.push(invTwo)
invoices.forEach((inv) => {
  console.log(inv.client, inv.details, inv.amount, inv.format())
})

const from = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const text = document.querySelector('#text') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

from.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log(type.value, text.value, details.value, amount.valueAsNumber)
})
