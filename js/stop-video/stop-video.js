const videoElements = document.querySelectorAll('.video__item')

const videoObserver = new IntersectionObserver(([entry]) => {
   const video = entry.target

   if (video.currentTime === 0) return

   if (!entry.isIntersecting) {
      video.pause()
   } else {
      video.play()
   }


}, {
   threshold: 0.2,
})

videoElements.forEach(video => videoObserver.observe(video))

export { videoElements, videoObserver }