const todoList = [{
    name: 'make dinner',
    dueDate: '2024-02-13'
}, {
    name: 'make coffee',
    dueDate: '2024-02-13'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <p>
            ${name} ${dueDate}
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
            </p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value; // the value property represents the text in the textbox.

    const dateInputElement = document.querySelector('.js-due-date-input'); 

    const dueDate = dateInputElement.value;


    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';//value, or text in the textbox, resets to empty.

    renderTodoList();
}