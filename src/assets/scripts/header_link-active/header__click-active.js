const headerLinkElements = document.querySelectorAll('.header__menu-link')

headerLinkElements.forEach(link => {
   link.addEventListener('click', () => {
      headerLinkElements.forEach((link) => {
         link.classList.remove('_active-link')
      })

      link.classList.add('_active-link')
   })

   link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')

      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
         e.preventDefault()

         const targetElement = document.querySelector(targetId)

         if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })

            history.replaceState(null, document.title, window.location.pathname + window.location.search)
         }
      }
   });
})

export { headerLinkElements }