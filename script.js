let addToDoButton = document.getElementById('addToDo');
let inputBox = document.getElementById('input-box');
let toDoContainer = document.getElementById('toDoContainer');
let count = 1;

addToDoButton.addEventListener('click', newP);
function newP () {
    let element = document.createElement('p')
    element.innerHTML = count + ". "+ inputBox.value;
    toDoContainer.appendChild(element);
    inputBox.value = "";
    count++;

    element.addEventListener('click', function(){
        element.style.textDecoration = 'line-through';
    })
    element.addEventListener('dblclick', function(){
        toDoContainer.removeChild(element);
    })
}