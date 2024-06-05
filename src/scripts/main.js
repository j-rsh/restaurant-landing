window.onload = function() {
  document.querySelector('.menu-tab a').click();
  setupNavbar();
  setupForm();
  validation();
  openTab; 

  imagesLoaded('.slider', function() {
    setupSlider();
  });
};

function setupNavbar() {
  const hamburger = document.querySelector(".hamburger-menu");
  const links = document.querySelector(".nav-links");
  const linkStyle = document.querySelectorAll(".main-banner ul li a");

  hamburger.addEventListener("click", () => {
    links.style.display = links.style.display === "none" ? "flex" : "none";
  });

  document.getElementById("close-menu").addEventListener("click", function () {
    links.style.display = "none";
  });

  linkStyle.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      linkStyle.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      if (window.getComputedStyle(hamburger).display !== 'none') {
        links.style.display = "none";
      }
    });
  });

  document.getElementById("bookBtn").addEventListener("click", function () {
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });
}


function setupForm(){
  const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');
  const numericInput = document.getElementById('numeric');

  decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numericInput.value);
    let minValue = parseInt(numericInput.min);
    if (currentValue > minValue) {
      numericInput.value = currentValue - 1;
    }
  });

  incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numericInput.value);
    numericInput.value = currentValue + 1;
  });
}

function validation()
{
  document.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', function() {
        if (this.checkValidity()) {
          this.classList.remove('invalid');
        } else {
          this.classList.add('invalid');
        }
      });
    });
    
    document.getElementById('booking-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      let valid = true;
    
      const nameInput = document.querySelector('input[name="name"]');
      const phoneInput = document.querySelector('input[name="phone"]');
      const emailInput = document.querySelector('input[name="email"]');
      const dateInput = document.querySelector('input[name="date"]');
      const timeInput = document.querySelector('input[name="time"]');
    
      if (nameInput.value.trim() === '') {
        valid = false;
        nameInput.classList.add('invalid');
      } else {
        nameInput.classList.remove('invalid');
      }
    
      if (!/^\d{10}$/.test(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add('invalid');
      } else {
        phoneInput.classList.remove('invalid');
      }
    
      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        valid = false;
        emailInput.classList.add('invalid');
      } else {
        emailInput.classList.remove('invalid');
      }
    
      if (dateInput.value === '') {
        valid = false;
        dateInput.classList.add('invalid');
      } else {
        dateInput.classList.remove('invalid');
      }
    
      if (timeInput.value === '') {
        valid = false;
        timeInput.classList.add('invalid');
      } else {
        timeInput.classList.remove('invalid');
      }
    
      if (valid) {
        document.querySelector('.page-content').classList.add('blur');
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').classList.add('visible');
      } else {
        alert('Please fill in all fields correctly.');
      }
    });
    
    document.getElementById('close-button').addEventListener('click', function() {
      document.getElementById('booking-form').reset();
    
      document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('invalid');
      });
    
      document.getElementById('numeric').value = 1;
    
      document.querySelector('.page-content').classList.remove('blur');
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('overlay').classList.remove('visible');
    });
    
    document.getElementById('increment').addEventListener('click', function() {
      let numericInput = document.getElementById('numeric');
      let currentValue = parseInt(numericInput.value, 10);
      numericInput.value = currentValue + 1;
    });
    
    document.getElementById('decrement').addEventListener('click', function() {
      let numericInput = document.getElementById('numeric');
      let currentValue = parseInt(numericInput.value, 10);
      if (currentValue > 1) {
        numericInput.value = currentValue - 1;
      }
    });

}

function openTab(event, tabId) {
  event.preventDefault();
  var tabContent = document.querySelectorAll('.tab-content > ul');

  tabContent.forEach(function(content) {
    content.classList.remove('active');
  });

  var tabLinks = document.querySelectorAll('.menu-tab a');
  tabLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');

  event.currentTarget.classList.add('active');
}

function setupSlider() {
  var flkty = new Flickity('.slider', {
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false 
  });

  var slideNumbersContainer = document.querySelector('.slide-number');
  var totalSlides = flkty.slides.length;

  var currentSlideElement = document.createElement('span');
  currentSlideElement.classList.add('current-slide');
  var totalSlidesElement = document.createElement('span');
  totalSlidesElement.classList.add('total-slides');
  totalSlidesElement.textContent = ' / ' + totalSlides;

  slideNumbersContainer.appendChild(currentSlideElement);
  slideNumbersContainer.appendChild(totalSlidesElement);

  function updateSlideNumber() {
    var currentIndex = flkty.selectedIndex + 1;
    currentSlideElement.textContent = currentIndex;
  }

  updateSlideNumber();

  flkty.on('select', function() {
    updateSlideNumber();
  });

  document.querySelector('.prev').addEventListener('click', function() {
    flkty.previous();
  });

  document.querySelector('.next').addEventListener('click', function() {
    flkty.next();
  });
}
