
  // Registration Form
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;

    // Check if user already exists
    if (localStorage.getItem(regUsername)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }

    // Store user data in local storage
    localStorage.setItem(regUsername, regPassword);
    alert("Registration successful! You can now login.");
    document.getElementById("registrationForm").reset(); // Reset form fields
  });

  // Login Form
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Check if username exists and password matches
    var storedPassword = localStorage.getItem(loginUsername);
    if (storedPassword && storedPassword === loginPassword) {
      alert("Login successful! Welcome, " + loginUsername + ".");
    } else {
      alert("Invalid username or password. Please try again.");
    }
    document.getElementById("loginForm").reset(); // Reset form fields
  });
