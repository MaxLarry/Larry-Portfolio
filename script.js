function reloadPage() {
  location.reload();
  window.location.href = "index.html";
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
var navUL = document.querySelector('nav ul');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
}

function closeDropDownMenu() {
    dropDownMenu.classList.remove('open');
  }

  document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!targetElement.closest('.dropdown_menu') && !targetElement.closest('.toggle_btn')) {
      closeDropDownMenu();
    }
  });
  

window.addEventListener('scroll', function () {
    closeDropDownMenu();
});

// about animation

const aboutSection = document.querySelector('.ABOUT');
const box = aboutSection.querySelector('.box');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // Adjust this value to control when the reveal effect is triggered
};

const revealCallback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      box.classList.add('animate-reveal');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(revealCallback, options);
observer.observe(aboutSection);



// portfolio animation

const LATESTSection = document.querySelector('.LATEST');
const slide = LATESTSection.querySelector('.slider');

const optionsLATEST = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4 // Adjust this value to control when the reveal effect is triggered
};

const revealCallbackLATEST = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slide.classList.add('animate-reveal');
      observer.unobserve(entry.target);
    }
  });
};

const observerLATEST = new IntersectionObserver(revealCallbackLATEST, optionsLATEST);
observerLATEST.observe(LATESTSection);



const ServiceSection = document.querySelector('.SERVICES');
const cards = ServiceSection.querySelectorAll('.card1, .card2, .card3');

const optionsService = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4 // Adjust this value to control when the reveal effect is triggered
};

const revealCallbackService = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cards.forEach(card => {
        card.classList.add('animate-reveal');
      });
      observer.unobserve(entry.target);
    }
  });
};

const observerService = new IntersectionObserver(revealCallbackService, optionsService);
observerService.observe(ServiceSection);


