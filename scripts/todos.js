import { displayTodos } from './displayTodos.js';

if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'login.html';
}

fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => res.json())
  .then(data => {
    document.getElementById('todoContainer').innerHTML = displayTodos(data);
  });

