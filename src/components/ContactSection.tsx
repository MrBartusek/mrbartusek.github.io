import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ContactSection() {
	const { t } = useTranslation();

	return (
		<Section id="contact">
			<SectionHeading>{t('sections.contact')}</SectionHeading>
			<ContactForm />
		</Section>
	);
}

export default ContactSection;
