export function displayTodos(data) {
  return data.map(todo => `
    <div class="todo">
      <h4>${todo.title}</h4>
      <p>Status: ${todo.completed ? '✅ Completed' : '❌ Pending'}</p>
    </div>
  `).join('');
}

