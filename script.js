startTodoMVC();

function startTodoMVC() {
    //Remove template
    let todoTemplate = document.querySelector('#todos-template');
    todoTemplate.remove();

    //Selectors
    const todoForm = document.querySelector('.todo-form');
    let todoInput = document.querySelector('.todo-input');
    let todoList = document.querySelector('.todo-list');

    //Variables for input
    let textInput = "";

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        textInput = todoInput.value;
        if (todoInput.value === "") {
            alert("You must write something!");
        } else {
            let todoLi = todoTemplate.content.firstElementChild.cloneNode(true);
            todoLi.querySelector('.todo-title').textContent = todoInput.value;
            todoList.append(todoLi);
        }
    });

}

/*todoInput.addEventListener("keypress", function (e) {
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
}*/