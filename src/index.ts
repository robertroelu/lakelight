//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit';
// import { } from '@finsweet/attributes-cmssort/'
import { cmsfilter } from '@finsweet/attributes-cmsfilter';
// import { } from '@finsweet/attributes-scrolldisable/'
import { cmsload } from '@finsweet/attributes-cmsload/';
// import { } from '@finsweet/attributes-socialshare/'

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { searchLoad } from '$utils/searchLoad';
import { socialShare } from '$utils/socialShare';
import { searchFind } from '$utils/searchFind';
import { breadCrumb } from '$utils/breadCrumbs';
import { speakersLoad } from '$utils/speakersLoad';
import { scrollAnimation } from '$utils/scrollAnimation';
import { backStep } from '$utils/backStep';
import { hoverAnimation } from '$utils/hoverAnimation';
// import { consoleClear } from '$utils/consoleClear';
// import { actualyear } from '$utils/actualYear';
// import { typer } from '$utils/typer';

window.Webflow ||= [];
window.Webflow.push(() => {
  // consoleClear();
  // actualyear();
  // nestedElement();
  linkblockedit();
  cmsload();
  // modal();
  swipers();

  searchLoad();
  cmsfilter();
  searchFind();

  socialShare();

  breadCrumb();

  speakersLoad();

  scrollAnimation();

  backStep();

  hoverAnimation();
  // typer();
});
