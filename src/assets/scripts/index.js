import { swiper } from "./swiper/swiper.js";
import { cookies } from "./cookie/cookie.js";
import { headerLinkElements } from "./header_link-active/header__click-active.js";
import { sectionElements, linkElements, observer } from "./header_link-active/header__scroll-active.js";
import { burgerMenuButtonElement, menuElement, bodyElement } from "./burger-menu/burger-menu.js";
import { videoElements, videoObserver } from "./stop-video/stop-video.js";

AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   once: true, // whether animation should happen only once - while scrolling down
});
