export const socialShare = () => {
  const URLS = {
    tw: 'https://twitter.com/share?',
    fb: 'https://www.facebook.com/sharer/sharer.php?',
    in: 'https://www.linkedin.com/shareArticle?mini=true&',
  };

  const SHARE_FACEBOOK_ATTR = 'r-share-facebook';
  const SHARE_TWITTER_ATTR = 'r-share-twitter';
  const SHARE_LINKEDIN_ATTR = 'r-share-linkedin';
  const SHARE_URL_ATTR = 'r-share-url';
  const TITLE_ATTR = 'title';
  const SUMMARY_ATTR = 'summary';

  function getAttributes(element: HTMLElement) {
    return {
      title: element.getAttribute(TITLE_ATTR) || document.title,
      summary: element.getAttribute(SUMMARY_ATTR) || '',
    };
  }

  function buildShareURL(platform: string, data: { title: string; summary: string }) {
    const params =
      platform === 'fb'
        ? { u: window.location.href, title: data.title }
        : { url: window.location.href, title: data.title, summary: data.summary };

    return URLS[platform] + new URLSearchParams(params).toString();
  }

  // Setup Twitter share links
  document.querySelectorAll(`[${SHARE_TWITTER_ATTR}]`).forEach((element: Element) => {
    const data = getAttributes(element as HTMLElement);
    (element as HTMLAnchorElement).setAttribute('href', buildShareURL('tw', data));
  });

  // Setup Facebook share links
  document.querySelectorAll(`[${SHARE_FACEBOOK_ATTR}]`).forEach((element: Element) => {
    const data = getAttributes(element as HTMLElement);
    (element as HTMLAnchorElement).setAttribute('href', buildShareURL('fb', data));
  });

  // Setup LinkedIn share links
  document.querySelectorAll(`[${SHARE_LINKEDIN_ATTR}]`).forEach((element: Element) => {
    const data = getAttributes(element as HTMLElement);
    (element as HTMLAnchorElement).setAttribute('href', buildShareURL('in', data));
  });

  // Setup URL copy functionality
  document.querySelectorAll(`[${SHARE_URL_ATTR}]`).forEach((element: Element) => {
    element.addEventListener('click', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = window.location.href;
      input.select();
      input.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(input.value);
      document.body.removeChild(input);
    });
  });
};
