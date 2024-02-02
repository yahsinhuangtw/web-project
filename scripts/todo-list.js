const todoList = [];//creates an array with no values inside.

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; // the value property represents the text in the textbox.
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';//value, or text in the textbox, resets to empty.

}