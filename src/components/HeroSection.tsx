import Container from './Container';
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
	return (
		<Container id="hero">
			<div className='my-32 flex lg:gap-48 lg:text-left text-center'>
				<div className='flex-1 flex flex-col justify-center'>
					<h1 className='text-5xl text-gray-200 font-semibold mb-8'>
						Hey! I'm {''}
						<span className='text-primary'>
							Bartosz&nbsp;Dokurno
						</span>
					</h1>
					<p className='text-xl leading-8'>
						Known online as <code className='text-gray-300'>MrBartusek</code>. I'm an aspiring web&nbsp;developer with passion and experience building
						websites&nbsp;and web&nbsp;applications. I&nbsp;frequently contribute
						to open-source projects and maintain a&nbsp;handful&nbsp;of them. Right&nbsp;now,
						a student at&nbsp;the {universityUrl}.
					</p>
					<SocialDrawer />
				</div>
				<div>
					<img
						className='rounded-2xl max-h-80 lg:block hidden'
						src='https://github.com/MrBartusek.png?size=320'
					/>
				</div>
			</div>
		</Container>
	);
}

export default HeroSection;
