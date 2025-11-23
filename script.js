'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

 document.addEventListener('DOMContentLoaded', function() {
        const tags = document.querySelectorAll('.tag');
        tags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`; 
        });
    });


   document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    const customAlert = document.getElementById('customAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            // 1. STOP THE REDIRECT (Crucial Step)
            e.preventDefault(); 

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            // 2. Change button text while sending
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            // 3. Send data via JavaScript (AJAX)
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                if (response.status == 200) {
                    // 4. Clear the form inputs
                    contactForm.reset();
                    // 5. Show your custom popup
                    customAlert.classList.add('active');
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch(error => {
                console.log(error);
                alert("Error sending message.");
            })
            .finally(() => {
                // 6. Reset button
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});

// Function to close the popup
function closeCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    if(customAlert) {
        customAlert.classList.remove('active');
    }
}

    