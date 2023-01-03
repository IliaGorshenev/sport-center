import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const desktopBreakpoint = window.matchMedia(`(min-width: 1199px)`);
const tabletBreakpoint = window.matchMedia(`(min-width: 980px)`);
const mobileBreakpoint = window.matchMedia(`(min-width: 767px)`);

const breakpointChecker = () => {
  if (desktopBreakpoint.matches) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  else if (tabletBreakpoint.matches) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  else if (mobileBreakpoint.matches) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  
  else {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

desktopBreakpoint.addListener(breakpointChecker);
tabletBreakpoint.addListener(breakpointChecker);
mobileBreakpoint.addListener(breakpointChecker);
breakpointChecker();
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
