// export const searchLoad = () => {
//   const elPrimary = document.querySelector('[search-main]') as HTMLElement;
//   if (!elPrimary) return;
//   const elSecondary = document.querySelector('[search-secondary]') as HTMLElement;
//   if (!elSecondary) return;

//   // const elements = elSecondary.querySelectorAll('[role="listitem"]') as NodeListOf<HTMLElement>;
//   const elements = elSecondary.querySelectorAll(
//     '.search_collection-item'
//   ) as NodeListOf<HTMLElement>;

//   elements.forEach((element) => {
//     elPrimary.appendChild(element);
//   });
// };

export const searchLoad = () => {
  const elPrimary = document.querySelector('[search-main]') as HTMLElement;
  if (!elPrimary) return;
  const elSecondary = document.querySelectorAll('[search-secondary]') as NodeListOf<HTMLElement>;
  if (!elSecondary) return;

  elSecondary.forEach((secondEl) => {
    // const elements = elSecondary.querySelectorAll('[role="listitem"]') as NodeListOf<HTMLElement>;
    const elements = secondEl.querySelectorAll(
      '.search_collection-item'
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      elPrimary.appendChild(element);
    });
  });

  const eventItem = elPrimary.querySelectorAll('[event-slug]') as NodeListOf<HTMLElement>;
  const eventItemTags = elPrimary.querySelectorAll('[event-slug-tags]') as NodeListOf<HTMLElement>;

  eventItem.forEach((item) => {
    const slug = item.getAttribute('event-slug');

    eventItemTags.forEach((itemTags) => {
      const slugTag = itemTags.getAttribute('event-slug-tags');
      if (slug === slugTag) {
        const nestEl = itemTags.querySelector('.search_collection-nest-wrapper') as HTMLElement;
        item.append(nestEl);
        itemTags.remove();
      }
    });
  });

  const listenItem = elPrimary.querySelectorAll('[listen-slug]') as NodeListOf<HTMLElement>;
  const listenItemTags = elPrimary.querySelectorAll(
    '[listen-slug-tags]'
  ) as NodeListOf<HTMLElement>;

  listenItem.forEach((item) => {
    const slug = item.getAttribute('listen-slug');

    listenItemTags.forEach((itemTags) => {
      const slugTag = itemTags.getAttribute('listen-slug-tags');
      if (slug === slugTag) {
        const nestEl = itemTags.querySelector('.search_collection-nest-wrapper') as HTMLElement;
        item.append(nestEl);
        itemTags.remove();
      }
    });
  });
};
