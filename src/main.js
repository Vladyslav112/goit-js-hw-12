// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper('.projects-wrapper', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   on: {
//     init: function () {
//       this.slides[0].style.opacity = 1;
//       this.slides[0].style.visibility = 'visible';
//     },
//     slideChangeTransitionEnd: function () {
//       this.slides.forEach(slide => {
//         slide.style.opacity = 0;
//         slide.style.visibility = 'hidden';
//       });
//       this.slides[this.activeIndex].style.opacity = 1;
//       this.slides[this.activeIndex].style.visibility = 'visible';
//     },
//     reachBeginning: function () {
//       document
//         .querySelector('.swiper-button-prev')
//         .classList.add('swiper-button-disabled');
//     },
//     reachEnd: function () {
//       document
//         .querySelector('.swiper-button-next')
//         .classList.add('swiper-button-disabled');
//     },
//     fromEdge: function () {
//       document
//         .querySelector('.swiper-button-next')
//         .classList.remove('swiper-button-disabled');
//       document
//         .querySelector('.swiper-button-prev')
//         .classList.remove('swiper-button-disabled');
//     },
//   },
// });
