function buildNewTodo(value) {
    const todoList = document.querySelector('#todo-list ul');
    // create li element 
    const parentLi = document.createElement('li');

    // create todo title 
    const todoSpanTitle = document.createElement('span');
    todoSpanTitle.textContent = value;
    const randomId = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
    parentLi.setAttribute('id', randomId);
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('actions');
    deleteButton.addEventListener('click', () => {
        deleteTodo(randomId);
    });
    // create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('actions');
    editButton.addEventListener('click', () => {
        editTodo(randomId);
    });
    // add title and delete and edit to li
    parentLi.append(todoSpanTitle, deleteButton, editButton);
    todoList.append(parentLi);
}

function deleteTodo(randomId) {
    const todoItem1 = document.getElementById(`${randomId}`);
    todoItem1.remove();
}

function editTodo(randomId) {
    const span =  li.firstElementChild;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    li.insertBefore(input, span);
    li.removeChild(span);
    button.textContent = 'save';
    if(button.textContent === 'save') {
    const input = li.firstElementChild;
    const span = document.createElement('span');
    span.textContent = input.value;
    li.insertBefore(span, input);
    li.removeChild(input);
    button.textContent = 'edit';
  }
}

function addNewTodo() {
    const todoItem = document.getElementById('todo-item');
    const warning = document.getElementById('warning');
    const todoItemValue = todoItem.value;
    if (!todoItemValue.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }
    buildNewTodo(todoItemValue);
    todoItem.value = '';
}

function search() {
    //let input = document.getElementById('searchButton').value
    let input, filter, ul, li, a, i;
    input = document.getElementById("searchButton");
    filter = input.value;
    ul = document.getElementById("main-list");
    li = document.querySelector('#todo-list ul li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}