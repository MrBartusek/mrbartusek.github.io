import { useState } from 'react';
import i18n, { SUPPORTED_LANGUAGES } from '../i18n';

function LanguageSelector() {
	const [ language, setLanguage ] = useState(i18n.language);

	function handleClick() {
		const currentLangIndex = SUPPORTED_LANGUAGES.indexOf(language);
		const nextLangIndex = (currentLangIndex + 1) % SUPPORTED_LANGUAGES.length;
		i18n.changeLanguage(SUPPORTED_LANGUAGES[nextLangIndex]).catch(console.error);
		setLanguage(i18n.language);
	}

	return (
		<button className='hover:underline' onClick={handleClick}>
			{ language }
		</button>
	);
}

export default LanguageSelector;
