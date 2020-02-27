let todoList = [];
let todoItems = '';


document.getElementById('submit-todo').addEventListener('click', function() {
    let todo = document.getElementById('todo').value;
    todoList.push(todo);
    console.log(todoList);

    //Loopar igenom vår array
    //För varje element skapa en li-tagg
    //Sedan lägga till vår li-tagg i vår ul-tagg
    todoItems = '';
    for(let i = 0; i < todoList.length; i++) {
        todoItems += '<li>' + todoList[i] + '</li>';
        console.log(todoItems);
    }
    document.getElementById('todo-list').innerHTML = todoItems;
});

