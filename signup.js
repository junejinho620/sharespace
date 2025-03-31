document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = signupForm.querySelector('#email').value;
    const password = signupForm.querySelector('#password').value;

    // Validate inputs
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Simulate successful signup
    alert('Signup successful! Redirecting to the login page...');
    window.location.href = 'login.html'; // Redirect to login page
  });

  // Email validation
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Password validation
  function validatePassword(password) {
    return password.length >= 6;
  }
});

// Show/hide password
const togglePasswordButtons = document.querySelectorAll('.toggle-password');
togglePasswordButtons.forEach(button => {
  button.addEventListener('click', function () {
    const passwordInput = this.previousElementSibling;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      this.textContent = 'Show Password';
    }
  });
});