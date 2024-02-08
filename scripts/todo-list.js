const todoList = ['make dinner', 'make coffee'];

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; // the value property represents the text in the textbox.

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';//value, or text in the textbox, resets to empty.

}