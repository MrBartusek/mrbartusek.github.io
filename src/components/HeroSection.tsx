import Section from './Section';
import SocialDrawer from './SocialDrawer';

function HeroSection() {
	const universityUrl = (
		<a
			href="https://www.uni.lodz.pl"
			className='styled-link'
			target='_blank'
		>
			University&nbsp;of&nbsp;Łódź
		</a>
	);

	const meteoalarmUrl = (
		<a
			href="https://github.com/MrBartusek/MeteoalarmCard"
			className='styled-link'
			target='_blank'
		>
			MeteoalarmCard
		</a>
	);

	return (
		<Section id="hero">
			<div className='flex xl:gap-48 lg:gap-16 lg:text-left text-center'>
				<div className='flex-1 flex flex-col justify-center'>
					<h1 className='sm:text-5xl text-4xl text-gray-200 font-semibold mb-8'>
						Hey! I'm {''}
						<span className='text-primary'>
							Bartosz&nbsp;Dokurno
						</span>
					</h1>
					<p className='sm:text-xl text-md sm:leading-8 leading-6'>
						Known online as <code className='text-gray-300'>MrBartusek</code>.
						I'm an aspiring web&nbsp;developer with passion and experience building
						websites&nbsp;and web&nbsp;applications. I&nbsp;frequently contribute
						to open-source projects and maintain a&nbsp;handful&nbsp;of them, such as {meteoalarmUrl}.
						Right&nbsp;now, trying to learn more about web development while studying at the {universityUrl}.
					</p>
					<SocialDrawer />
				</div>
				<div>
					<img
						className='rounded-2xl max-h-80 lg:block hidden shadow-2xl'
						alt='profile picture'
						width={320} height={320}
						src='avatar.webp'
					/>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
