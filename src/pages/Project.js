import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from '../helpers/projectList'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<div className='project-details__media-container'>
						{project.mediaType === 'video' ? (
							<video
								className='project-details__media'
								controls
								autoPlay
								muted
								loop
								playsInline
							>
								<source src={project.media} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						) : (
							<img
								src={project.media}
								alt={project.title}
								className='project-details__media'
							/>
						)}
					</div>

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
				</div>
			</div>
		</main>
	)
}

export default Project
