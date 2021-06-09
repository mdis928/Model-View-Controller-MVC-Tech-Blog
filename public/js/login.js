function loginForm (event) {
    event.preventDefault ()

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
  
      // Send a POST request to the API endpoint
      const response =  fetch('/api/userRoutes/login', {
        method: 'POST',
        body: JSON.stringify({ username : email.value, password : password.value }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
}

  function signupFormHandler (event) {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = fetch('/api/userRoutes', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/main');
      } else {
        alert(response.statusText);
      }
    }
  };

document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);

document
    .querySelector('.login-form')
    .addEventListener('submit', signupFormHandler);