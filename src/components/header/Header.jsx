import './header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Hi, I'm <em>Alex</em>
					</strong>
					<br />a <span className='header__title-italic'>Frontend</span>{' '}
					developer
				</h1>
				<div className='header__text'>
					<p>
						Turning ideas into interactive realities.
						<br />
						Fueled by curiosity and endless growth.
					</p>
				</div>
				<a
					href='https://drive.google.com/file/d/1QbmCgNe63WlJIP1eJIOs0o7_AHQ3FeUX/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
					className='btn'
				>
					Download CV
				</a>
			</div>
		</header>
	);
};

export default Header;
