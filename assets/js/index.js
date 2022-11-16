let counter= document.querySelector('.counter');
let plus=document.querySelector('.plus');
let minus= document.querySelector('.minus');
let clear= document.querySelector('.clear')
let numberValue=0;
counter.innerHTML = numberValue;

function add(){
    numberAdded=numberValue +1;
    numberValue=numberAdded;
    counter.innerHTML= numberValue;
}

function subtract(){
    numberSubtracted= numberValue -1;
    numberValue=numberSubtracted;
    counter.innerHTML= numberValue;
}
    

function clearing() {
    numberValue=0;
    counter.innerHTML= numberValue;

}  

plus.addEventListener('click',add);
minus.addEventListener('click',subtract);
clear.addEventListener('click',clearing)