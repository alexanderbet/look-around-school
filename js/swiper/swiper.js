const swiper = new Swiper('.swiper', {
   loop: true,
   lazy: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   keyboard: {
      enabled: true,
   },

   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },

   effect: 'fade',
})

export { swiper }
