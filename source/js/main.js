import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const validatePhone = function () {
  const eventCalllback = function (e) {
    const el = e.target;
    const clearVal = el.dataset.phoneClear;
    const pattern = el.dataset.phonePattern;
    const matrixDef = '+_ (___) ___-__-__';
    let matrix = pattern ? pattern : matrixDef;
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  const PHONE_INPUTS = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of PHONE_INPUTS) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
};

const desktopBreakpoint = window.matchMedia(`(min-width: 1199px)`);
const tabletBreakpoint = window.matchMedia(`(min-width: 980px)`);
const mobileBreakpoint = window.matchMedia(`(min-width: 767px)`);

const breakpointChecker = () => {
  if (desktopBreakpoint.matches) {
    const swiper1 = new Swiper('.swiper--1', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
      },
    });
  }

  else if (tabletBreakpoint.matches) {
    const swiper1 = new Swiper('.swiper--1', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
      },
    });
  }

  else if (mobileBreakpoint.matches) {
    const swiper1 = new Swiper('.swiper--1', {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 3 + '%',
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
      },
    });
  }

  else {
    const swiper1 = new Swiper('.swiper--1', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // freeMode: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
      },
    });
  }
};

desktopBreakpoint.addListener(breakpointChecker);
tabletBreakpoint.addListener(breakpointChecker);
mobileBreakpoint.addListener(breakpointChecker);
breakpointChecker();

const swiper2 = new Swiper('.swiper--2', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  // freeMode: true,

  mousewheel: {
    invert: false,

    releaseOnEdges: true,
    sensitivity: 0
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next--2',
    prevEl: '.swiper-button-prev--2',
  },
});
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
    validatePhone();
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
