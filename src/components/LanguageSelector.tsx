import { useState } from 'react';
import i18n, { SUPPORTED_LANGUAGES } from '../i18n';
import classNames from 'classnames';

function LanguageSelector() {
	const [language, setLanguage] = useState(i18n.language);

	function handleClick(code: string) {
		i18n.changeLanguage(code).catch(console.error);
		setLanguage(i18n.language);
	}

	return (
		<div
			className={classNames(
				'ml-4 border-l-2 border-gray-600 pl-3',
				'flex divide-x divide-solid divide-gray-700',
			)}
		>
			{SUPPORTED_LANGUAGES.map((code, key) => (
				<button
					className={classNames(
						{ 'font-extrabold': language == code },
						'px-2 hover:font-extrabold',
					)}
					onClick={() => handleClick(code)}
					key={key}
				>
					{code.toUpperCase()}
				</button>
			))}
		</div>
	);
}

export default LanguageSelector;
