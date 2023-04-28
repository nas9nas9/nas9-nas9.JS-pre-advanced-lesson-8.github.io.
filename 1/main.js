let form = document.forms[0];
let add = document.querySelector('.btn_add');
let remove = document.querySelector('.btn_remove');
let cenzor = document.querySelector('.btn_cenzor');
let bad = document.querySelector('.bad');
let badContent = [];
const re = /\w/g;
function addWord() {
    if (form[0].value) {
        badContent.push(form[0].value);
        bad.textContent = badContent;
        form[0].value = '';
        form[0].placeholder = `word here...`;
        form[0].style.border = '2px solid grey';
    }
    else {
        form[0].placeholder = `Please write a word!`;
        form[0].style.border = '3px solid red';
    }
}
function resetWord() {
    badContent.length = 0;
    bad.textContent = badContent;
}
function editText() {
    if (form[3].value.length > 0) {
        const textCenzor = form[3].value.split(" ");
        form[3].value = textCenzor.map(elem => badContent.includes(elem) ? elem.replace(re, '*') : elem).join(' ');
        form[3].placeholder = `text here..`;
    }
    else {
        form[3].placeholder = `Please write a text!`;
        form[3].style.border = '3px solid red';
    }
}
