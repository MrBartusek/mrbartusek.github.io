import { Link, ScrollRestoration } from 'react-router-dom';
import AboutHeader from '../About/AboutHeader';
import AboutParagraph from '../About/AboutPharagraph';
import AboutSection from '../About/AboutSection';
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

				<ResumeFinder className="mb-8 text-lg font-semibold" />

				<AboutSection>
					<AboutHeader>My quick story</AboutHeader>
					<AboutParagraph>
						<strong className="font-semibold">
							Since my early days, I have been heavily intrigued by the creation
							of various things.
						</strong>{' '}
						Whether it was sketching, drawing or assembling cardboard models,
						I&apos;ve always found joy in bringing ideas to life with my hands.
						As I grew older, my fascination with electronics led me to
						experiment with DIY kits and even dabble in building robots.{' '}
						<strong className="font-semibold">
							This innate drive for creativity has been a constant companion
							throughout my life.
						</strong>
					</AboutParagraph>
					<AboutParagraph>
						Then one random morning, it hit me: why not try my hand at making a
						video game? It just seemed like the logical next step? I can
						practically hear myself typing into the YouTube search bar,
						something like <code>How to make a game in notepad</code> and
						stumbling upon{' '}
						<Link to="https://www.youtube.com/watch?v=nglyQqzwk0A">
							this video (in Polish)
						</Link>
						. It&apos;s this old, kinda crappy tutorial on making a basic batch
						file game. But hey, we all gotta start somewhere, right?{' '}
						<strong className="font-semibold">
							And that&apos;s how I dipped my toes into the wild world of
							programming.
						</strong>
					</AboutParagraph>
				</AboutSection>
				<AboutSection>
					<AboutHeader>As a developer</AboutHeader>
					<AboutParagraph>
						<strong className="font-semibold">
							I specialize in web development
						</strong>{' '}
						with a focus on backend work, although I also take pride in my
						frontend skills and enjoy crafting client side code. Just take a
						look at the site you&apos;re currently browsing.
					</AboutParagraph>
					<AboutParagraph>
						<strong className="font-semibold">
							I love solving various problems.
						</strong>{' '}
						I can&apos;t even begin to count the occurrences when I&apos;ve
						stumbled upon challenges and needed to learn new concepts and tools
						to resolve them. I consider myself a great problem solver, confident
						in my ability to find solutions to any obstacle that arises.
					</AboutParagraph>
				</AboutSection>
				<AboutSection>
					<AboutHeader>As a person</AboutHeader>
					<AboutParagraph>
						<strong className="font-semibold">
							I consider myself quite organized, with a keen eye for detail.
						</strong>{' '}
						I&apos;m always striving to optimize and refine whatever tasks come
						my way. From ensuring my calendar is always up-to-date to
						meticulously organizing my to-do lists, I&apos;m dedicated to
						maximizing efficiency in every aspect of life.
					</AboutParagraph>
					<AboutParagraph>
						<strong className="font-semibold">
							I have a strong sense of curiosity.
						</strong>{' '}
						I&apos;m constantly seeking out new opportunities to learn and grow,
						embracing each new experience with enthusiasm and an open mind.
					</AboutParagraph>
				</AboutSection>
			</Container>
		</Layout>
	);
}

export default AboutPage;
