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

  const animation = (onHoverEl: NodeListOf<HTMLElement>, animatedEl: HTMLElement) => {
    onHoverEl.forEach((hoverEl) => {
      hoverEl.addEventListener('mouseenter', function () {
        animatedEl.style.backgroundColor = '#b7dfc7';
      });

      hoverEl.addEventListener('mouseleave', function () {
        animatedEl.style.backgroundColor = '#f0ece1';
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

      animation(onHoverEl, animatedEl);
    });
  };

  const cardVertical = () => {
    const verticalEl = document.querySelectorAll('.card-vertical') as NodeListOf<HTMLElement>;
    if (!verticalEl) return;

    verticalEl.forEach((el) => {
      const onHoverEl = el.querySelectorAll('a') as NodeListOf<HTMLElement>;

      const animatedEl = el.querySelector('.card-vertical_animated-wrap') as HTMLElement;
      if (!animatedEl) return;

      animation(onHoverEl, animatedEl);
    });
  };

  const cardEvent = () => {
    const cardEl = document.querySelectorAll('.card-event') as NodeListOf<HTMLElement>;
    if (!cardEl) return;

    cardEl.forEach((el) => {
      const onHoverEl = el.querySelectorAll('a') as NodeListOf<HTMLElement>;

      const animatedEl = el.querySelector('.card-event_animated-wrap') as HTMLElement;
      if (!animatedEl) return;

      animation(onHoverEl, animatedEl);
    });
  };

  cardVertical();
  cardHorizontal();
  cardEvent();
  loadMore();
};
