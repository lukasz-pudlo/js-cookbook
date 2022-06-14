'use strict';

function isString() {
    var text = document.getElementById("text-input").value;
    console.log(text);
    if (typeof text === 'string' && text.length > 0) {
        alert("This is a string")
    }
    else (
        alert("This is not a string")
    )
}

function createObjectString() {
    const unknownVariable = new String('this an object string');
    console.log(unknownVariable);
    console.log(String.prototype.isPrototypeOf(unknownVariable));
}

function numberToFixed() {
    var inputNumber = document.getElementById("text-input").value;
    const someNumber = inputNumber.toFixed(2);
    console.log(someNumber);
}

const formatter = new Intl.NumberFormat('pl', {style: "currency", currency: "PLN"});

const someNumber = 123232;

const formattedNumber = formatter.format(someNumber);

console.log(formattedNumber);