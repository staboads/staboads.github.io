document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
  });
let cookieconsent = document.getElementById("cookieConsent");

function showcookie() {
  setTimeout(() => {
    cookieconsent.style.display = "block";
  }, 3000);
}
function closecookie() {
  cookieconsent.style.display = "none";
}
document
  .getElementById("show-signup")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
  });

document
  .getElementById("show-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  });

  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    alert('Sign up successful!');
    // Here you can add code to handle the form submission, like sending the data to your server
});
document.getElementById('login-signup-button').addEventListener('click', function() {
  window.location.href = 'login-signup.html';
});


