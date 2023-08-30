import { useTranslation } from 'react-i18next';
import Section from './Section';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';

function ContactSection() {
	const { t } = useTranslation();

	return (
		<Section id="contact">
			<SectionHeading subTitle={t('sections.contact.subtitle')}>
				{t('sections.contact.title')}
			</SectionHeading>
			<ContactForm />
		</Section>
	);
}

export default ContactSection;
