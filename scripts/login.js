document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'todos.html';
  } else {
    alert('Invalid credentials');
  }
});

