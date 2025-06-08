import './footer.css'

import gitHub from './../../img/icons/gitHub.svg'
import gmail from './../../img/icons/gmail.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import telegram from './../../img/icons/telegram.svg'
import whatsapp from './../../img/icons/whatsapp.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://t.me/Pauzhetsky'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={telegram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://wa.me/79065722500'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={whatsapp} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='mailto:kazancev.alex2020@mail.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={gmail} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://github.com/Pauzhetsky?tab=repositories'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a
								href='https://www.linkedin.com/in/pauzhetsky'
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
	)
}

export default Footer
