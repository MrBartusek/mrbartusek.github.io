import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import Section from './Section';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Link } from 'react-router-dom';

function ContactSection() {
	const { t } = useTranslation();

	return (
		<Section
			id="contact"
			className="m-auto max-w-[700px]"
		>
			<SectionHeading>{t('sections.contact')}</SectionHeading>
			<div className="flex flex-col gap-12">
				<a
					href="mailto:bartosz@dokurno.dev"
					className="text-2xl font-semibold"
				>
					bartosz@dokurno.dev
				</a>
				<Link to="contact">
					<Button className="flex gap-3 md:px-8 md:py-4 md:text-xl">
						{t('contact.button')}
					</Button>
				</Link>
			</div>
		</Section>
	);
}

export default ContactSection;
