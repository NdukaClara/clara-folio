const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.header_wrapper');
const scrollUpBtn = document.querySelector('.scroll_up_btn');
const html = document.getElementsByTagName('html');

// js for nav
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


// js for header scroll
document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 50) {
    header.style.backgroundColor = "rgb(20, 20, 20)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});


// js for scroll btn
document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 500) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
