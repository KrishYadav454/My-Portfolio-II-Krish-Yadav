/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*===== CONTACT FORM WITH EMAIL JS =====*/

// Initialize EmailJS with your user ID
(function() {
    emailjs.init("#");
})();

// Function to send email
function sendEmail(name, email, message) {
    emailjs.send("#", "#", {
        from_name: name,
        from_email: email,
        message: message
    }).then(
        function(response) {
            console.log("Email sent successfully", response);
            alert("Your message has been sent successfully!");
        },
        function(error) {
            console.log("Failed to send email", error);
            alert("Failed to send message. Please try again later.");
        }
    );
}

// Event listener for form submission
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    if (name && email && message) {
        sendEmail(name, email, message);
        // Clear form fields after submission
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    } else {
        alert("Please fill in all fields.");
    }
});
