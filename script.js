document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});
let cookieconsent = document.getElementById("cookieConsent");

function showcookie(){
setTimeout(() => {
cookieconsent.style.display = "block";
},3000)

}
function closecookie(){
  cookieconsent.style.display = "none";
}