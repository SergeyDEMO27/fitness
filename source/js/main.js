import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import tabsSwitcher from './modules/offersTabs';
import instructorsSlider from './modules/instructorsSlider';
import feedbackSlider from './modules/feedbackSlider';
import telMaskHandler from './modules/telMask';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
tabsSwitcher();
instructorsSlider();
feedbackSlider();
telMaskHandler();
