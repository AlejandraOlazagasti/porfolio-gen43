import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import changeLang from './helpers/language.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();
updateCopyrightYear();
resetToHome();
parallax();
activeMenu();
sendEmail();
changeLang();
