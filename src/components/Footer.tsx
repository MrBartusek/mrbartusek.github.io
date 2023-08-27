import Container from './Container';

function Footer() {
	return (
		<footer className='border-very-washed border-t border-solid'>
			<Container>
				<div className='py-6'>
					<div className='text-gray-300'>
						© Bartosz Dokurno 2023
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
