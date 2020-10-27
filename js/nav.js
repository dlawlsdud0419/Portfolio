const togglebtn = document.querySelector('.navbar-togglebtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

togglebtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
  });