import { useState } from 'react';
import i18n from '../i18n';

function LanguageSelector() {
	const [ language, setLanguage ] = useState(i18n.language);

	function handleClick() {
		i18n.changeLanguage(language == 'pl-PL' ? 'en-US' : 'pl-PL').catch(console.error);
		setLanguage(i18n.language);
	}

	return (
		<button className='hover:underline' onClick={handleClick}>
			{ language }
		</button>
	);
}

export default LanguageSelector;
