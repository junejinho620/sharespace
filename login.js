document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;

    // Validate inputs
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Simulate successful login
    alert('Login successful! Redirecting to the home page...');
    window.location.href = 'index.html'; // Redirect to home page
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

  // Forgot password functionality
  const forgotPasswordLink = document.querySelector('.forgot-password a');
  forgotPasswordLink.addEventListener('click', function (event) {
    event.preventDefault();
    const email = prompt('Please enter your email to reset your password:');
    if (email && validateEmail(email)) {
      alert(`Password reset instructions have been sent to ${email}.`);
    } else {
      alert('Please enter a valid email address.');
    }
  });
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