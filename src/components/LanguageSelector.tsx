import { useState } from 'react';
import i18n, { SUPPORTED_LANGUAGES } from '../i18n';

function LanguageSelector() {
	const [ language, setLanguage ] = useState(i18n.language);

	function handleClick() {
		i18n.changeLanguage(getNextLanguage()).catch(console.error);
		setLanguage(i18n.language);
	}

	function getNextLanguage(): string {
		const currentLangIndex = SUPPORTED_LANGUAGES.indexOf(language);
		const nextLangIndex = (currentLangIndex + 1) % SUPPORTED_LANGUAGES.length;
		return SUPPORTED_LANGUAGES[nextLangIndex];
	}

	return (
		<button className='hover:underline border-l ml-4 pl-3 border-slate-600' onClick={handleClick}>
			{ getNextLanguage().toUpperCase() }
		</button>
	);
}

export default LanguageSelector;
