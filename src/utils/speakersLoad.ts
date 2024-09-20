export const speakersLoad = () => {
  const speakerEl = document.querySelector('[speaker]') as HTMLElement;
  if (!speakerEl) return;
  const speakersWrap = document.querySelector('[speakers-wrapper]') as HTMLElement;
  if (!speakerEl) return;

  // Clear the wrapper
  speakersWrap.innerHTML = '';

  const createEl = (imgUrl: string, name: string) => {
    // Clone the speaker element
    const clonedSpeaker = speakerEl.cloneNode(true) as HTMLElement;

    // Update image src
    const imgEl = clonedSpeaker.querySelector('img') as HTMLImageElement;
    if (imgEl) imgEl.src = imgUrl;

    // Update speaker name
    const nameEl = clonedSpeaker.querySelector('.event_hero_speaker-name') as HTMLElement;
    if (nameEl) nameEl.textContent = name;

    // Append to the wrapper
    speakersWrap.appendChild(clonedSpeaker);
  };

  const mainSpeakers = document.querySelectorAll(
    '.event_speaker_item-content-right'
  ) as NodeListOf<HTMLElement>;

  if (!mainSpeakers) return;

  mainSpeakers.forEach((el) => {
    const imgUrl = el.querySelector('.event_speaker_profile-img')?.getAttribute('src') || '';
    const name = el.querySelector('.event_speaker_name')?.textContent || '';

    createEl(imgUrl, name);
  });
};
