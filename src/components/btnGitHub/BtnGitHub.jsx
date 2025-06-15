import gitHubIcon from './../../img/icons/gitHub-black.svg'
import './btnGitHub.css'

const BtnGitHub = ({ link }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='btn-outline'
		>
			<img src={gitHubIcon} alt='' />
			View
		</a>
	)
}

export default BtnGitHub
