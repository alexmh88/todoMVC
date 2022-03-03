startTodoMVC();

function startTodoMVC() {
    //Remove template
    let todoTemplate = document.querySelector('#todos-template');
    todoTemplate.remove();

    //Selectors
    let todoForm = document.querySelector('.todo-form');
    const arrow = document.querySelector('.arrow');
    const myArrow = document.querySelector('.my-arrow');
    const all = document.querySelector('#all');
    const active = document.querySelector('#active');
    const completed = document.querySelector('#completed');
    const clear = document.querySelector('#clear-completed');
    const checkBox = document.querySelector(".check");
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
            todoLi.querySelector('.remove-todo').addEventListener('click', (event) => {
                event.preventDefault();
                items--;
                itemsLeft.textContent = items + textHTML;
                if (items === 0) {
                    hideButtons();
                }
                todoLi.remove();
            });
        }
    });


    arrow.addEventListener('change', (event) => {
        event.preventDefault();
        let taskList = todoList.querySelectorAll('li');
        for (let task of taskList) {
            if (arrow.checked == true) {
                task.querySelector('.check').checked = true;
            } else {
                task.querySelector('.check').checked = false;
            }
        }
    });

    checkBox.addEventListener('change', (event) => {
        event.preventDefault();
        let taskList = todoList.querySelectorAll('li');
        for (let task in taskList) {
            if (checkBox.checked == true) {
                items--;
                itemsLeft.textContent = items + textHTML;
            }
        }
    });

    clear.addEventListener('click', (event) => {
        event.preventDefault();
        let todoLi = todoList.querySelectorAll('li');
        for (let task of todoLi)
            if (task.querySelector('.check').checked == true) {
                items--;
                itemsLeft.textContent = items + textHTML;
                if (items === 0) {
                    hideButtons();
                }
                task.remove();
            }
    }); 

    completed.addEventListener('click', (event) => {
        event.preventDefault();
        let todoLi = todoList.querySelectorAll('li');
        for (let task of todoLi) {
            if (task.querySelector('.check').checked == false) {
                task.style.display = "none";
            }
            else if (task.querySelector('.check').checked == true) {
                task.style.display = "block";
            }
        }
    });

    active.addEventListener('click', (event) => {
        event.preventDefault();
        let todoLi = todoList.querySelectorAll('li');
        for (let task of todoLi) {
            if (task.querySelector('.check').checked == true) {
                task.style.display = "none";
            }
            else if (task.querySelector('.check').checked == false) {
                task.style.display = "block";
            }
        }
    });

    all.addEventListener('click', (event) => {
        event.preventDefault();
        let todoLi = todoList.querySelectorAll('li');
        for (let task of todoLi) {
            if (task.querySelector('.check').checked == true) {
                task.style.display = "block";
            }
            else if (task.querySelector('.check').checked == false) {
                task.style.display = "block";
            }
        }
    });


    //method for activating all buttons
    function activateAllButtons() {
        itemsLeft.hidden = false;
        myArrow.hidden = false;
        all.hidden = false;
        active.hidden = false;
        completed.hidden = false;
        clear.hidden = false;
    }

    //method for hiding all buttons
    function hideButtons() {
        itemsLeft.hidden = true;
        myArrow.hidden = true;
        all.hidden = true;
        active.hidden = true;
        completed.hidden = true;
        clear.hidden = true;
    }

}