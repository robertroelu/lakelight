import gsap from 'gsap';

export const newsPopup = () => {
  const elPopup = document.querySelector('[news-popup]') as HTMLElement;
  if (!elPopup) return;

  const elPopupClose = elPopup.querySelector('[news-popup-close]') as HTMLElement;

  // Check session storage to see if the popup has been shown/closed
  const hasPopupBeenClosed = sessionStorage.getItem('newsPopupClosed');

  // If popup hasn't been closed in this session, show it
  if (!hasPopupBeenClosed) {
    // Initially set opacity to 0
    gsap.set(elPopup, { opacity: 0, display: 'block' });

    // Fade in animation
    gsap.to(elPopup, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Handle close button click
    if (elPopupClose) {
      elPopupClose.addEventListener('click', () => {
        // Fade out animation
        gsap.to(elPopup, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            // Hide the popup after animation completes
            elPopup.style.display = 'none';
          },
        });

        // Set session storage to remember popup has been closed
        sessionStorage.setItem('newsPopupClosed', 'true');
      });
    }
  } else {
    // If popup was already closed in this session, keep it hidden
    elPopup.style.display = 'none';
  }
};
