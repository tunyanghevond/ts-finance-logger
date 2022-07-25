"use strict";
const from = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const text = document.querySelector('#text');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, text.value, details.value, amount.valueAsNumber);
});
