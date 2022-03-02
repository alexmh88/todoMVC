startTodoMVC();


function startTodoMVC() {
    //Remove template
    let todoTemplate = document.querySelector('#todos-template');
    todoTemplate.remove();

    //Selectors
    const todoForm = document.querySelector('.todo-form');
    const todoDelete = document.querySelector('.remove-todo');
    const todoCheck = document.querySelector('.check');
    const arrow = document.querySelector('.arrow');
    const all = document.querySelector('#all');
    const active = document.querySelector('#active');
    const completed = document.querySelector('#completed');
    const clear = document.querySelector('#clear-completed');
    let todoInput = document.querySelector('.todo-input');
    let todoList = document.querySelector('.todo-list');
    let itemsLeft = document.querySelector('#items-left');

    //Variables for input and counting items
    let textInput = "";
    let items = 0;
    let textHTML = " items left";

    //hide buttons when list is empty
    hideButtons();

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        textInput = todoInput.value;
        if (todoInput.value === "") {
            alert("You must write something!");
        } else {
            let todoLi = todoTemplate.content.firstElementChild.cloneNode(true);
            todoLi.querySelector('.todo-title').textContent = todoInput.value;
            todoList.append(todoLi);
            activateAllButtons();
            items++;
            itemsLeft.textContent = items + textHTML;
            todoInput.value = ""; //remove text input
        }
    });
    /*
        todoList.addEventListener('click', (e) => {
            const item = e.target;
            item.remove();
        });
    */




    //method for activating all buttons
    function activateAllButtons() {
        arrow.hidden = false;
        all.hidden = false;
        active.hidden = false;
        completed.hidden = false;
        clear.hidden = false;
    }

    //method for hiding all buttons
    function hideButtons() {
        arrow.hidden = true;
        all.hidden = true;
        active.hidden = true;
        completed.hidden = true;
        clear.hidden = true;
    }

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