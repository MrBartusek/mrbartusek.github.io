import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import universalLanguageDetect from '@unly/universal-language-detector';
import Utils from './utils';

const SUPPORTED_LANGUAGES = [ 'en', 'pl' ];
const FALLBACK_LANG = 'en';

function detectLanguage() {
	const urlParams = new URLSearchParams(window.location.search);
	const languageParam = urlParams.get('lang');
	if(languageParam) return languageParam;

	const localStorageLang = localStorage.getItem('i18n_lang');
	if(localStorageLang) return localStorageLang;

	return universalLanguageDetect({
		supportedLanguages: SUPPORTED_LANGUAGES,
		fallbackLanguage: FALLBACK_LANG
	});
}

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: detectLanguage(),
		fallbackLng: FALLBACK_LANG,
		debug: Utils.isDev()
	})
	.catch(console.error);

i18n.on('languageChanged', (lang: string) => {
	localStorage.setItem('i18n_lang', lang);
});

export default i18n;
export {
	SUPPORTED_LANGUAGES
};
