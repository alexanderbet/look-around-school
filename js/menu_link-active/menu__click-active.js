const menuLinkElements = document.querySelectorAll('.header__menu-link')

menuLinkElements.forEach((link) => {

   link.addEventListener('click', () => {
      menuLinkElements.forEach((link) => {
         link.classList.remove('_active-link')
      })

      link.classList.add('_active-link')
   })
})

export { menuLinkElements }