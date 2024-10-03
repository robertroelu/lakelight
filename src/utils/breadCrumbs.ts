export const breadCrumb = () => {
  const textEl = document.querySelector('[breadcrumb]') as HTMLElement;
  if (!textEl) return;
  const text = textEl.textContent?.toLowerCase();

  if (text === 'articles') {
    textEl.setAttribute('href', '/read/articles');
  }

  if (text === 'goodreads') {
    textEl.setAttribute('href', '/read/good-reads');
  }

  if (text === 'goodfinds') {
    textEl.setAttribute('href', '/read/good-finds');
  }

  if (text === 'beneath the headlines') {
    textEl.setAttribute('href', '/listen/beneath-the-headlines');
  }

  if (text === 'on good work') {
    textEl.setAttribute('href', '/listen/on-good-work');
  }
};
