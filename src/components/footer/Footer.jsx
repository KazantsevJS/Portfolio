import './footer.css';

import gitHub from './../../media/icons/gitHub.svg';
import gmail from './../../media/icons/gmail.svg';
import linkedIn from './../../media/icons/linkedIn.svg';
import telegram from './../../media/icons/telegram.svg';
import whatsapp from './../../media/icons/whatsapp.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://t.me/KazantsevJS'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={telegram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://wa.me/79960302435'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={whatsapp} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='mailto:ale.kazantsev@mail.astondevs.ru'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={gmail} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://github.com/KazantsevJS?tab=repositories'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://www.linkedin.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={linkedIn} alt='Link' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
