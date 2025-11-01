// Menu hambúrguer
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');
if (toggle) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}
