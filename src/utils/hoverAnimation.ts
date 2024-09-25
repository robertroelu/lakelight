import { gsap } from 'gsap';

export const hoverAnimation = () => {
  const loadMore = () => {
    const loadMoreEl = document.querySelectorAll('[load-more]') as NodeListOf<HTMLElement>;

    loadMoreEl.forEach((el) => {
      el.addEventListener('click', () => {
        setTimeout(() => {
          cardVertical();
          cardHorizontal();
          cardEvent();
        }, 10);
      });
    });
  };

  const animation = (
    onHoverEl: NodeListOf<HTMLElement>,
    animatedEl: HTMLElement,
    animatedImg: HTMLElement,
    hoverArrow: HTMLElement | null
  ) => {
    onHoverEl.forEach((hoverEl) => {
      hoverEl.addEventListener('mouseenter', function () {
        animatedEl.style.backgroundColor = '#b7dfc7';

        gsap.to(animatedImg, { scale: 1.1, duration: 1, ease: 'power2.out', overwrite: true });

        if (hoverArrow) {
          gsap.to(hoverArrow, { x: '0.125rem', duration: 1, ease: 'power2.out', overwrite: true });
        }
      });

      hoverEl.addEventListener('mouseleave', function () {
        animatedEl.style.backgroundColor = '#f0ece1';

        gsap.to(animatedImg, { scale: 1, duration: 0.5, ease: 'power2.out', overwrite: true });

        if (hoverArrow) {
          gsap.to(hoverArrow, { x: '0rem', duration: 1, ease: 'power2.out', overwrite: true });
        }
      });
    });
  };

  const cardHorizontal = () => {
    const horizontalEl = document.querySelectorAll('.card-horizontal') as NodeListOf<HTMLElement>;
    if (!horizontalEl) return;

    horizontalEl.forEach((el) => {
      const onHoverEl = el.querySelectorAll('a') as NodeListOf<HTMLElement>;

      const animatedEl = el.querySelector('.card-horizontal_animated-wrap') as HTMLElement;
      if (!animatedEl) return;

      const animatedImg = el.querySelector('img') as HTMLElement;
      if (!animatedImg) return;

      animation(onHoverEl, animatedEl, animatedImg, null);
    });
  };

  const cardVertical = () => {
    const verticalEl = document.querySelectorAll('.card-vertical') as NodeListOf<HTMLElement>;
    if (!verticalEl) return;

    verticalEl.forEach((el) => {
      const onHoverEl = el.querySelectorAll('a') as NodeListOf<HTMLElement>;

      const animatedEl = el.querySelector('.card-vertical_animated-wrap') as HTMLElement;
      if (!animatedEl) return;

      const animatedImg = el.querySelector('img') as HTMLElement;
      if (!animatedImg) return;

      animation(onHoverEl, animatedEl, animatedImg, null);
    });
  };

  const cardEvent = () => {
    const cardEl = document.querySelectorAll('.card-event') as NodeListOf<HTMLElement>;
    if (!cardEl) return;

    cardEl.forEach((el) => {
      const onHoverEl = el.querySelectorAll('a') as NodeListOf<HTMLElement>;

      const animatedEl = el.querySelector('.card-event_animated-wrap') as HTMLElement;
      if (!animatedEl) return;

      const animatedImg = el.querySelector('img') as HTMLElement;
      if (!animatedImg) return;

      const hoverArrow = el.querySelector('.card-event_item-arrow') as HTMLElement;
      if (!hoverArrow) return;

      animation(onHoverEl, animatedEl, animatedImg, hoverArrow);
    });
  };

  cardVertical();
  cardHorizontal();
  cardEvent();
  loadMore();
};
