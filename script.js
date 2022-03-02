startTodoMVC();


function startTodoMVC() {
    //Remove template
    let todoTemplate = document.querySelector('#todos-template');
    todoTemplate.remove();

    //Selectors
    let todoForm = document.querySelector('.todo-form');
    let todoCheck = document.querySelector('.check');
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

    //method for activating all buttons
    function activateAllButtons() {
        itemsLeft.hidden = false;
        arrow.hidden = false;
        all.hidden = false;
        active.hidden = false;
        completed.hidden = false;
        clear.hidden = false;
    }

    //method for hiding all buttons
    function hideButtons() {
        itemsLeft.hidden = true;
        arrow.hidden = true;
        all.hidden = true;
        active.hidden = true;
        completed.hidden = true;
        clear.hidden = true;
    }

}