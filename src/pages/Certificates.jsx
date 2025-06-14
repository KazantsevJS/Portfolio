import { certificateList } from '../helpers/certificateList'

const Certificates = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Certificates</h2>
				<ul className='certificates'>
					{certificateList.map((certificate) => (
						<li key={certificate.id} className='certificate-item'>
							<a
								href={certificate.link}
								target='_blank'
								rel='noopener noreferrer'
								className='certificate-link'
							>
								{certificate.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}

export default Certificates
