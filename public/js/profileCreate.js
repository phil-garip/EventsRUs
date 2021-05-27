const loginFormHandler = async (event) => {

    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();
  
    if (email && password && firstName && lastName && username && birthday) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ email, password, firstName, lastName, username, birthday }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  

document.querySelector('#newProfile-form').addEventListener('submit', loginFormHandler);
