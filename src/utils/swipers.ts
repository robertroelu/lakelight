import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade, Pagination, Navigation];

  const swipersEl = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swipersEl) return;

  swipersEl.forEach((el) => {
    const attrEl = el.getAttribute('swiper-option');

    if (attrEl === 'home-articles') {
      const elPrev = document.querySelector(`[swiper-prev="${attrEl}"]`) as HTMLElement;
      const elNext = document.querySelector(`[swiper-next="${attrEl}"]`) as HTMLElement;

      let swiper = new Swiper(el, {
        modules: swiperModules,
        speed: 500,
        slidesPerView: 3.3,
        allowTouchMove: true,
        // rewind: true,
        spaceBetween: 32,
        navigation: {
          nextEl: elNext,
          prevEl: elPrev,
        },
        pagination: {
          el: '.home_articles_nav-bullet-wrap',
          bulletClass: 'home_articles_nav-bullet',
          bulletActiveClass: 'home_articles_nav-bullet-active',
          clickable: true,
        },
      });
    }
  });
};
