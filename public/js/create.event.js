const loginFormHandler = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#event-title').value.trim();
    console.log(title);
    // const email = document.querySelector('#email').value.trim();
    // const location = document.querySelector('#event-location').value.trim();
    // const time = document.querySelector('#event-time').value.trim();
    // const age = document.querySelector('.with-gap').value.trim();
    // if (email && title && location && time && age) {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    // }
  };
  

document.querySelector('#create-event').addEventListener('submit', loginFormHandler);


  