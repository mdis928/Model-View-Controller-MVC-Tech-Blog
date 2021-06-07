const signupFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
    console.log(usernameEl.value, passwordEl.value);

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', signupFormHandler);