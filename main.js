const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');
const menuExit = document.querySelector('.close-nav');
const padLinks = document.querySelectorAll('a.pad-link');

menuButton.addEventListener('click', () => {
  nav.style.display = 'block';
});

menuExit.addEventListener('click', () => {
  nav.style.display = 'none';
});

padLinks.forEach((menu) => {
  menu.addEventListener('click', () => {
    nav.style.display = 'none';
  });
});
