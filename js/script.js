const list=['Melanzane', 'Fiordilatte', 'Cipolle', 'Olio', 'Sale', 'Passata', 'Parmigiano', 'Basilico', 'Pepe'];
const listContainer = document.querySelector('.shopping-list');

let i = 0;
let element = prompt('sdjfbi');

while(i < list.lenght){
    let listItem = document.createElement('li');
    listItem.innerText = i;
    listContainer.append(listItem);
    i++
}