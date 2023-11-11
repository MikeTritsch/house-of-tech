const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userName').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('this worked!');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.signUp-form').addEventListener('submit', signUpFormHandler);