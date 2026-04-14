const cookieElement = document.querySelector('.cookie')
const cookieButtonElement = document.querySelector('.cookie-btn')

const cookies = () => {
   if (!Cookies.get('hide-cookie')) {
      setTimeout(() => {
         cookieElement.style.display = 'block'
      }, 0)
   }

   Cookies.set('hide-cookie', 'true', {
      expires: 30
   })
}

cookies()

if (cookieButtonElement) {
   cookieButtonElement.addEventListener('click', () => {
      cookieElement.style.display = 'none'
   })
}

export { cookies }
