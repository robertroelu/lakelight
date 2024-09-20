export const breadCrumb = () => {
  const textEl = document.querySelector('[breadcrumb]') as HTMLElement;
  if (!textEl) return;
  const text = textEl.textContent?.toLowerCase();

  if (text === 'articles') {
    textEl.setAttribute('href', 'https://lakelight-dev.webflow.io/read/articles');
  }

  if (text === 'goodreads') {
    textEl.setAttribute('href', 'https://lakelight-dev.webflow.io/read/good-reads');
  }

  if (text === 'goodfinds') {
    textEl.setAttribute('href', 'https://lakelight-dev.webflow.io/read/good-finds');
  }

  if (text === 'presson') {
    textEl.setAttribute('href', 'https://lakelight-dev.webflow.io/listen/presson');
  }

  if (text === 'docpod') {
    textEl.setAttribute('href', 'https://lakelight-dev.webflow.io/listen/docpod');
  }
};
