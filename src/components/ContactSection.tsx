import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ContactSection() {
	const { t } = useTranslation();

	return (
		<Section id="contact">
			<SectionHeading>{t('sections.contact')}</SectionHeading>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-1">
					<span className="text-xl">{t('contact.by_email')}:</span>
					<Link
						to="mailto:bartosz@dokurno.dev"
						className="text-2xl font-semibold"
					>
						bartosz@dokurno.dev
					</Link>
				</div>

				<div className="flex flex-col gap-1">
					<span className="text-xl">{t('contact.by_form')}:</span>
					<Link
						to="contact"
						className="text-2xl font-semibold"
					>
						{t('contact.contact_form')}
					</Link>
				</div>
			</div>
		</Section>
	);
}

export default ContactSection;
