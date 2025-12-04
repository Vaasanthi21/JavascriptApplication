document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = {
    email: e.target.email.value,
    password: e.target.password.value
  };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful!');
  window.location.href = 'login.html';
});

