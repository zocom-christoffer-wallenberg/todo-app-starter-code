let todoList = [];
let ulElem = document.querySelector('#todo-list');
const url = 'https://awesome-todo-api.herokuapp.com/tasks';

function createTodoItem(todo) {
    console.log(todo);
    let todoItemElem = document.createElement('li');
    todoItemElem.innerHTML = todo.task;
    ulElem.append(todoItemElem);
}

function showTodos(todos) {
    for(let i = 0; i < todos.length; i++) {
        createTodoItem(todos[i]);
    }
}

function getTodos() {
    fetch(url, {method: 'GET'}).then(response => {
        return response.json();
    }).then(data => {
        showTodos(data);
    }).catch(error => {
        console.error('ERROR IN FETCH: ', error);
    })
}

function postTodo(todo) {
    let obj = {
        task: todo
    }
    console.log(JSON.stringify(obj));
    //Specificera POST, i body vad vi ska skicka med och headers som säger att det är JSON
    fetch(url, {method: 'POST', body: JSON.stringify(obj), headers: {'Content-Type': 'application/json'}})
    .then((response) => {
        return response.json();
    }).then(data => {
        createTodoItem(data[0]);
    }).catch(error => {
        console.error('ERROR IN FETCH: ', error);
    })
}

document.getElementById('submit-todo').addEventListener('click', function() {
    let todo = document.getElementById('todo').value;
    todoList.push(todo);
    postTodo(todo);
});

getTodos();

/*Lägg till todo
När jag klickar på knappen hämta värde från inputfält
Skicka variabel todo till API


//Hämta todos från API som hämtar från databas
//Lägg till todo och skicka till API som lägger till i en databas

/*TODO API
Hämta alla todos
URL: https://awesome-todo-api.herokuapp.com/tasks
Metod: GET
Lägg till ny todo
URL: https://awesome-todo-api.herokuapp.com/tasks
Metod: POST
Body: { task: 'Valfri sträng' }*/