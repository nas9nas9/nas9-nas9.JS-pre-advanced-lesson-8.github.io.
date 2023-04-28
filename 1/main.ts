
let form = document.forms[0] as HTMLFormElement;
let add = document.querySelector('.btn_add') as HTMLFormElement;
let remove = document.querySelector('.btn_remove') as HTMLFormElement;
let cenzor = document.querySelector('.btn_cenzor') as HTMLFormElement;
let bad = document.querySelector('.bad') as HTMLFormElement;
// let badContent: string[] = [];
const re : any = /\w/g

function addWord(): void {
   if(form[0].value){
    badContent.push(form[0].value);
    bad.textContent = badContent;
    
    
    form[0].value = '';
    form[0].placeholder = `word here...`;
    form[0].style.border = '2px solid grey';
    } else {
        form[0].placeholder = `Please write a word!`;
        form[0].style.border = '3px solid red';
    }
}

function resetWord():void {
    badContent.length = 0;
    bad.textContent = badContent;
}

function editText():void {
    if (form[3].value.length > 0){
        const textCenzor: string[] = form[3].value.split(" ");
        form[3].value = textCenzor.map(elem => badContent.includes(elem) ? elem.replace(re, '*') : elem).join(' ')
        form[3].placeholder = `text here..`
    }
    else {
        form[3].placeholder = `Please write a text!`;
        form[3].style.border = '3px solid red';
    }
}

