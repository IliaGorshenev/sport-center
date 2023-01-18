import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import Swiper from 'swiper';
import {Navigation} from 'swiper';

document.querySelector(".swiper--no-js--1").classList.remove("swiper--no-js--1");
document.querySelector(".swiper--no-js--2").classList.remove("swiper--no-js--2");

const PRICE_BUTTONS = document.querySelectorAll('[data-price-button]');
const PRICE_LISTS = document.querySelectorAll('[data-price-list]');
const PRICE_PERIOD_ITEMS = document.querySelectorAll('[data-price-period-item]');
const PRICE_PERIOD_LINKS = document.querySelectorAll('[data-price-period-link]');

const priceOpener = function (where) {
  const PRICE_LIST = document.querySelector(`[data-price-list="${where}"]`);
  PRICE_LISTS.forEach((list) => {
    list.classList.remove('price__card-list--active');
  });
  PRICE_LIST.classList.add('price__card-list--active');
};

PRICE_BUTTONS.forEach((priceButton) => {
  priceButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    priceOpener(priceButton.getAttribute('data-price-button'));

    PRICE_PERIOD_ITEMS.forEach((item) => {
      item.classList.remove('price__period-item--active');
    });

    PRICE_PERIOD_LINKS.forEach((link) => {
      link.classList.remove('price__period-link--active');
    });

    priceButton.closest('[data-price-period-item]').classList.add('price__period-item--active');
    priceButton.closest('[data-price-period-link]').classList.add('price__period-link--active');
  });
});


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

const PLAYER = document.querySelector('[data-video-button]');
const IFRAME = document.querySelector('[data-video]');
const VIDEO_LAYER = document.querySelector('[data-video-layer]');
PLAYER.addEventListener('click', function (evt) {
  evt.preventDefault();
  IFRAME.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1');
  setTimeout(() => VIDEO_LAYER.remove(), 300);
});

const swiper1 = new Swiper('.swiper--1', {
  loop: true,
  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-button-next--1',
    prevEl: '.swiper-button-prev--1',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 5.6 + '%',
    },

    980: {
      slidesPerView: 3,
      spaceBetween: 3 + '%',
    },

    1199: {
      slidesPerView: 4,
      spaceBetween: 3.1 + '%',
    }
  }
});

const swiper2 = new Swiper('.swiper--2', {
  loop: false,
  slidesPerView: 1,
  mousewheel: {
    invert: false,

    releaseOnEdges: true,
    sensitivity: 0,
  },

  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-button-next--2',
    prevEl: '.swiper-button-prev--2',
  },
});

// let swiperButtons = document.querySelectorAll(".swiper-button--2");

// swiper2.on('transitionEnd', function () {
//   let slide = document.querySelector(".swiper--2").querySelector(".swiper-slide-active");
//   swiperButtons.forEach((button) => {
//       const halfOfHeight = slide.scrollHeight/2;
//       console.log(swiper2.scrollHeight)
//       button.style = `top: ${halfOfHeight}px"`;
//   })
// });

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    validatePhone();
  });
});
