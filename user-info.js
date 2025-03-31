// Handle User Info Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const userInfoForm = document.getElementById('user-info-form');

  if (userInfoForm) {
    userInfoForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Gather form data
      const formData = new FormData(userInfoForm);
      const userData = {};
      for (const [key, value] of formData.entries()) {
        userData[key] = value;
      }

      // Save data to localStorage (or send to server)
      localStorage.setItem('userData', JSON.stringify(userData));

      alert('Your information has been saved!');
      window.location.href = 'index.html'; // Redirect to home page
    });
  }
});