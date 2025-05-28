const aos = AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on

   once: true, // whether animation should happen only once - while scrolling down
});

AOS.init();

export { aos }
