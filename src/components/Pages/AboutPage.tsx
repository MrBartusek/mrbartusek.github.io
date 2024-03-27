import { ScrollRestoration } from 'react-router-dom';
import Container from '../Container';
import Layout from '../Layout';
import ResumeFinder from '../ResumeFinder';
import SectionHeading from '../SectionHeading';
import AboutHeader from '../About/AboutHeader';
import AboutSection from '../About/AboutSection';
import AboutParagraph from '../About/AboutPharagraph';

function AboutPage() {
	return (
		<Layout>
			<ScrollRestoration />
			<Container className="py-12">
				<SectionHeading className="mb-6">
					I was always passionate about creation
				</SectionHeading>

				<ResumeFinder className="mb-8 text-lg font-semibold" />

				<AboutSection>
					<AboutHeader>My quick story</AboutHeader>
					<AboutParagraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						consequatur iusto! Nostrum eaque cum sequi est, minima et id
						perspiciatis quam ad dicta assumenda non error deleniti vel hic
						iste.
					</AboutParagraph>
				</AboutSection>
				<AboutSection>
					<AboutHeader>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</AboutHeader>
					<AboutParagraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
						iure delectus nostrum optio molestiae eius inventore quas nobis et
						repellat rerum error?
					</AboutParagraph>
					<AboutParagraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
						iure delectus nostrum optio molestiae eius inventore quas nobis et
						repellat rerum error?
					</AboutParagraph>
					<AboutParagraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
						iure delectus nostrum optio molestiae eius inventore quas nobis et
						repellat rerum error?
					</AboutParagraph>
				</AboutSection>
			</Container>
		</Layout>
	);
}

export default AboutPage;
