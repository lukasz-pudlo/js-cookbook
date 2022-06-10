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