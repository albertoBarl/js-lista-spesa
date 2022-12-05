const list = ['Melanzane', 'Fiordilatte', 'Cipolle', 'Olio', 'Sale', 'Passata', 'Parmigiano', 'Basilico', 'Pepe'];

const listContainer = document.querySelector('.shopping-list');

let i = 0;

while(i < list.length){
    // istruzioni
    let item = list[i]
    
    let listItem = document.createElement('li');
    listItem.innerText = item;
    listContainer.append(listItem);

    // CONDIZIONE per terminare il ciclo
    i++
}