import { NavLink } from 'react-router-dom'
import './project.css'

function Project({ title, media, mediaType, index }) {
	return (
		<NavLink to={`/project/${index}`} className='project-link'>
			<li className='project'>
				<div className='project__media-container'>
					{mediaType === 'video' ? (
						<div className='video-container'>
							<video
								className='project__media'
								autoPlay
								loop
								muted
								playsInline
								controls={false}
							>
								<source src={media} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>
					) : (
						<img src={media} alt={title} className='project__media' />
					)}
				</div>
				<h3 className='project__title'>{title}</h3>
			</li>
		</NavLink>
	)
}

export default Project
