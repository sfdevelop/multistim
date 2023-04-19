/* Menu */
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
burger.addEventListener('click', function(event) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.documentElement.classList.toggle('lock');
});
function closeNav() {
    var closemenu = document.querySelector('.menu');
    var closeburger = document.querySelector('.burger');
    closemenu.classList.remove('active');
    closeburger.classList.remove('active');
    document.documentElement.classList.remove('lock');
}

/* More */
document.addEventListener('DOMContentLoaded', function() {
    const detailsBtn = document.querySelector('.btn__more');
    const detailsText = document.querySelector('.details-text');

    const detailsBtn2 = document.querySelector('.btn__explore');
    const detailsText2 = document.querySelector('.details-text-2');
  
    if (detailsBtn && detailsText) {
      detailsBtn.addEventListener('click', function() {
        if (detailsText.style.display === 'none') {
          detailsText.style.display = 'block';
          detailsBtn.textContent = 'Turn';
        } else {
          detailsText.style.display = 'none';
          detailsBtn.textContent = 'Learn More';
        }
      });
    }
    if (detailsBtn2 && detailsText2) {
        detailsBtn2.addEventListener('click', function() {
          if (detailsText2.style.display === 'none') {
            detailsText2.style.display = 'block';
            detailsBtn2.textContent = 'Turn';
          } else {
            detailsText2.style.display = 'none';
            detailsBtn2.textContent = 'Learn More';
          }
        });
      }
  });

/* Swiper */
var swiper = new Swiper(".mySwiper1", {
  direction: 'horizontal',
  loop: false,     
  slidesPerView: 'auto',   
    scrollbar: {
       el: ".swiper-scrollbar",
      clickable: true,
    },
    navigation: {
      nextEl: '.partner-btn-next',
      prevEl: '.partner-btn-prev',
    }, 
});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".cases-btn-next",
    prevEl: ".cases-btn-prev",
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
});
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-butto-next",
    prevEl: ".swiper-butto-prev",
  },
  thumbs: {
    swiper: swiper4,
  },
});

var swiper6 = new Swiper(".mySwiper6", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
});
var swiper5 = new Swiper(".mySwiper5", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-butto-next",
    prevEl: ".swiper-butto-prev",
  },
  thumbs: {
    swiper: swiper6,
  },
});


/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}