const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo
    }
});

function addTodo(event){
    event.preventDefault();
    //div todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    todoList.appendChild(todoDiv);
}