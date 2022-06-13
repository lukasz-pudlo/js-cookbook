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