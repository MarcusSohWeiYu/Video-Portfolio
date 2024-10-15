// To download resume on phone
document.getElementById('downloadCvLink').addEventListener('click', function (e) {
  // Check if the user is on a mobile device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Prevent the default action of the link
    e.preventDefault();
    
    // Redirect to the server-side script to force download
    window.location.href = 'download.php'; // Adjust the path accordingly
  }
  // For desktop users, the default "download" attribute behavior will proceed
});


//Submitting Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Form data as an object
  let formData = new FormData(this);

  fetch('https://formspree.io/f/xvoeqqlr', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('form-response-succeed').textContent = 'Thanks for your submission!';
      // Optionally, reset the form here
      document.getElementById('contact-form').reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          document.getElementById('form-response-fail').textContent = data.errors.map(error => error.message).join(", ");
        } else {
          document.getElementById('form-response-fail').textContent = 'Oops! There was a problem with your submission.';
        }
      });
    }
  })
  .catch(error => {
    document.getElementById('form-response-fail').textContent = 'Oops! There was a problem with your submission.';
  });
});
