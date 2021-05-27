const loginFormHandler = async (event) => {

    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const username = document.querySelector('#username').value.trim();
    const birthday = document.querySelector('#birthday').value.trim();
  
    if (email && password && firstName && lastName && username && birthday) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
