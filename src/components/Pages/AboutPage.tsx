import { ScrollRestoration } from 'react-router-dom';
import Container from '../Container';
import Layout from '../Layout';
import ResumeFinder from '../ResumeFinder';
import SectionHeading from '../SectionHeading';

function AboutPage() {
	return (
		<Layout>
			<ScrollRestoration />
			<Container className="py-12">
				<SectionHeading className="mb-6">
					I was always passionate about creation
				</SectionHeading>

				<ResumeFinder className="mb-4 font-semibold" />

				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
					consequatur iusto! Nostrum eaque cum sequi est, minima et id
					perspiciatis quam ad dicta assumenda non error deleniti vel hic iste.
				</p>

				<h2 className="mb-3 mt-12 text-2xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h2>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>

				<h2 className="mb-3 mt-12 text-2xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h2>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>

				<h2 className="mb-3 mt-12 text-2xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h2>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>
				<p className="mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					repudiandae incidunt ipsa obcaecati beatae, maxime laboriosam ullam
					iure delectus nostrum optio molestiae eius inventore quas nobis et
					repellat rerum error?
				</p>
			</Container>
		</Layout>
	);
}

export default AboutPage;
