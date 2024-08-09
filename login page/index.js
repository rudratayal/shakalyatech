document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    // Simple validation example
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Redirect to the success page
    window.location.href = 'success.html';



});