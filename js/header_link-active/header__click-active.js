const headerLinkElements = document.querySelectorAll('.header__menu-link')

headerLinkElements.forEach((link) => {

   link.addEventListener('click', () => {
      headerLinkElements.forEach((link) => {
         link.classList.remove('_active-link')
      })

      link.classList.add('_active-link')
   })
})

export { headerLinkElements }