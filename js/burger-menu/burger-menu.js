const burgerMenuButtonElement = document.querySelector('.burger-btn')
const menuElement = document.querySelector('.header__menu')
const menuLinkElements = document.querySelectorAll('.header__menu-link')
const bodyElement = document.body

if (burgerMenuButtonElement) {
   burgerMenuButtonElement.addEventListener('click', burgerMenuActive)

   menuLinkElements.forEach((link) => {
      link.addEventListener('click', removeBurgerMenu)
   })
}

function burgerMenuActive() {
   burgerMenuButtonElement.classList.toggle('_active-btn')
   menuElement.classList.toggle('_menu-open')
   bodyElement.classList.toggle('_scroll-hidden')
}

function removeBurgerMenu() {
   burgerMenuButtonElement.classList.remove('_active-btn')
   menuElement.classList.remove('_menu-open')
   bodyElement.classList.remove('_scroll-hidden')
}

export { burgerMenuButtonElement, menuElement, menuLinkElements, bodyElement }
