
const from = document.querySelector('.new-item-form')as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const text = document.querySelector('#text') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

from.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        text.value,
        details.value,
        amount.valueAsNumber
    )
})

