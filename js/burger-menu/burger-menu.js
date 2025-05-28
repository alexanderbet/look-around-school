const burgerMenuButtonElement = document.querySelector('.burger__menu-button')
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
   burgerMenuButtonElement.classList.toggle('_active-burger')
   menuElement.classList.toggle('_open-menu')
   bodyElement.classList.toggle('_scroll-hidden')
}

function removeBurgerMenu() {
   burgerMenuButtonElement.classList.remove('_active-burger')
   menuElement.classList.remove('_open-menu')
   bodyElement.classList.remove('_scroll-hidden')
}

export { burgerMenuButtonElement, menuElement, menuLinkElements, bodyElement }
