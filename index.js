// Write your code here!
//selects tag with id=main
//removes from document body
const main = document.querySelector('#main');
document.body.removeChild(main);

//create a new h1 element
let h1 = document.createElement('h1');
//assign an id to the h1 element
h1.id = 'victory';
//declare and assign variable to h1 element
let newHeader = document.body.appendChild(h1);

let name = 'Uriel'
newHeader.innerHTML = `${name} is the champion`
