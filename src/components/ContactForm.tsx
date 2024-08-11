import { useTranslation } from 'react-i18next';
import Button from './Button';
import FormControl from './FormControl';

function ContactForm() {
	const { t } = useTranslation();

	return (
		<div className="my-8 flex justify-center">
			<form
				className="w-full"
				action="https://usebasin.com/f/2b9a507cda56"
				method="POST"
				encType="multipart/form-data"
			>
				<div className="flex flex-col md:flex-row md:gap-8">
					<FormControl
						as="input"
						label={t('contact_form.name.label')}
						type="text"
						id="name"
						name="name"
						placeholder={t('contact_form.name.placeholder')}
						required
						minLength={2}
						maxLength={32}
					/>
					<FormControl
						as="input"
						label={t('contact_form.email.label')}
						type="email"
						id="email"
						name="email"
						placeholder={t('contact_form.email.placeholder')}
						required
						minLength={2}
						maxLength={32}
					/>
				</div>
				<FormControl
					as="textarea"
					label={t('contact_form.message.label')}
					id="message"
					name="message"
					placeholder={t('contact_form.message.placeholder')}
					required
					rows={8}
					maxLength={4000}
				/>

				{/* Honeypot */}
				<input
					type="hidden"
					name="ejpzmytb"
				/>

				<div className="mt-8 flex flex-col-reverse items-center justify-between gap-5 md:flex-row">
					<div className="text-center  md:text-left">
						{t('contact_form.via-email')}:{' '}
						<a
							href="mailto:bartosz@dokurno.dev"
							className="underline"
						>
							bartosz@dokurno.dev
						</a>
					</div>
					<Button
						type="submit"
						className="px-16 md:px-8"
					>
						{t('contact_form.submit')}
					</Button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
