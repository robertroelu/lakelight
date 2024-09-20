import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const scrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollEl = document.querySelectorAll('[scroll-animation]') as NodeListOf<HTMLElement>;
  if (!scrollEl) return;
  scrollEl.forEach((el) => {
    let typeSplit = new SplitType(el, {
      types: 'lines,words,chars',
      tagName: 'div',
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 55%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
    tl.from(el.querySelectorAll('.char'), {
      //   opacity: 0.3,
      //   color: '#27363b',
      color: '#f0ece1',
      duration: 2.5,
      ease: 'power4.out',
      stagger: { each: 0.3 },
    });
  });
};
