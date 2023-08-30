import { useTranslation } from 'react-i18next';
import Button from './Button';
import FormControl from './FormControl';

function ContactForm() {
	const { t } = useTranslation();

	return (
		<div className='flex justify-center mt-16'>
			<form
				className='w-full max-w-[700px]'
				action="https://usebasin.com/f/2b9a507cda56"
				method="POST"
				encType="multipart/form-data"
			>
				<div className='flex flex-row gap-8'>
					<FormControl
						as='input'
						label={t('contact.name')}
						type="text"
						id="name"
						name="name"
						required
						minLength={2}
						maxLength={32}
					/>
					<FormControl
						as='input'
						label={t('contact.email')}
						type="email"
						id="email"
						name="email"
						required
						minLength={2}
						maxLength={32}
					/>
				</div>
				<FormControl
					as='textarea'
					label={t('contact.message')}
					id="email"
					name="email"
					required
					rows={8}
					maxLength={4000}
				/>
				<div className='flex justify-end mt-8'>
					<Button type='submit'>{t('contact.submit')}</Button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
