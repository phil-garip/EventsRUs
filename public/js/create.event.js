const loginFormHandler = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#event-title').value.trim();
    const email = document.querySelector('#email').value.trim();
    const location = document.querySelector('#event-location').value.trim();
    const time = document.querySelector('#event-time').value.trim();
    const age = document.querySelector('.with-gap').value.trim();
  
    if (email && title && location && time && age) {
      const response = await fetch('/api/users/newEvents', {
        method: 'POST',
        body: JSON.stringify({ email, title, location, time }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  

document.querySelector('#create-event').addEventListener('submit', loginFormHandler);

// date picker
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  