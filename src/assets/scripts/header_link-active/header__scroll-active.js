const sectionElements = document.querySelectorAll('section')
const linkElements = document.querySelectorAll('.header__menu-link')

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {

      if (entry.isIntersecting) {
         linkElements.forEach((link) => {

            const relevantLink = link.getAttribute('href').replace('#', '')
            const currentId = entry.target.id

            link.classList.toggle(
               '_active-link',
               relevantLink === currentId
            )
         })
      }
   })

}, {
   threshold: 0.3,
})

sectionElements.forEach(section => observer.observe(section))

export { sectionElements, linkElements, observer }