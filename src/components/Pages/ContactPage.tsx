import { useTranslation } from 'react-i18next';
import { ScrollRestoration } from 'react-router-dom';
import ContactForm from '../ContactForm';
import Container from '../Container';
import Layout from '../Layout';
import SectionHeading from '../SectionHeading';

function ContactPage() {
	const { t } = useTranslation();

	return (
		<Layout>
			<ScrollRestoration />
			<Container className="mt-12 max-w-[800px]">
				<SectionHeading>{t('sections.contact')}</SectionHeading>
				<ContactForm />
			</Container>
		</Layout>
	);
}

export default ContactPage;
