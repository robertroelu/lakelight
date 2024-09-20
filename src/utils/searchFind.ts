export const searchFind = () => {
  const elInput = document.querySelector('#search') as HTMLInputElement;
  if (!elInput) return;
  const resultWrap = document.querySelector('[result-wrap]') as HTMLElement;
  if (!resultWrap) return;

  elInput.addEventListener('keyup', () => {
    if (elInput.value.length === 0) {
      // Set the example div opacity to 0 when input has more than 0 characters
      resultWrap.style.opacity = '0';
      setTimeout(() => {
        resultWrap.style.display = 'none';
      }, 200);
    } else {
      // Set the example div opacity to 1 when input is empty
      resultWrap.style.display = 'flex';
      setTimeout(() => {
        resultWrap.style.opacity = '1';
      }, 200);
    }
  });
};
