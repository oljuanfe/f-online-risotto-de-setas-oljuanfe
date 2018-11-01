'use strict';

console.log('>> Ready :)');

let data;
const URL = 'https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
const onButton = document.querySelector('.selected-button');
const offButton = document.querySelector('.deselected-button');



data = JSON.parse(localStorage.getItem('recipe'));
console.log('data after get', data);

if (data === null) {
  console.log('entrando if');
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      localStorage.setItem('recipe', JSON.stringify(json));
      return (data = json, console.log('data', data));
    });
}

function selectedAll(){
  console.log('click seleccionar');
}

function deselectedAll() {
  console.log('click deseleccionar');
}

onButton.addEventListener('click', selectedAll);
offButton.addEventListener('click', deselectedAll);

console.log('data final', data);