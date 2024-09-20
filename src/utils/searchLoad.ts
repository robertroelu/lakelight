export const searchLoad = () => {
  const elPrimary = document.querySelector('[search-main]') as HTMLElement;
  if (!elPrimary) return;
  const elSecondary = document.querySelector('[search-secondary]') as HTMLElement;
  if (!elSecondary) return;

  const elements = elSecondary.querySelectorAll('[role="listitem"]') as NodeListOf<HTMLElement>;

  elements.forEach((element) => {
    elPrimary.appendChild(element);
  });
};
