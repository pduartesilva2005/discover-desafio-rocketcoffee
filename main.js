const $menu = document.querySelector('[data-js="menu"]');
const $navbar = document.querySelector('[data-js="navbar"]');

function openMenuMobile() {
  const isOpen = $menu.classList.contains('open');

  const classToAddInMenu = isOpen ? 'close' : 'open';
  const classToRemoveInMenu = isOpen ? 'open' : 'close';

  $navbar.classList.toggle('open');
  $menu.classList.add(classToAddInMenu);
  $menu.classList.remove(classToRemoveInMenu);
}

$menu.addEventListener('click', openMenuMobile);
