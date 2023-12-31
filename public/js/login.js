// Login functionality
const logInFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#login-userName').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Event listener
document.querySelector('.login-form').addEventListener('submit', logInFormHandler);












