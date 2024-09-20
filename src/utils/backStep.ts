export const backStep = () => {
  const backEl = document.querySelector('[back-one-step]') as HTMLElement;
  if (!backEl) return;
  backEl.addEventListener('click', () => {
    window.history.back(); // Go back one step in the browser history
  });
};
