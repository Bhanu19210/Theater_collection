function validateLogin() {
    // Hardcoded credentials for three users
    const users = [
      { username: 'sarat', password: 'pass1', page: 'Theatre_dashboard.html' },
      { username: 'admin', password: 'pass2', page: 'admin_home.html' },
      { username: 'user3', password: 'pass3', page: 'login.html' }
    ];

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var wrong = document.getElementById("wrong");

    // Check if the entered credentials match any user
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      // Redirect to the respective page for the matched user
      window.location.href = matchedUser.page;
    } else {
      wrong.style.display="block";
    }
  }