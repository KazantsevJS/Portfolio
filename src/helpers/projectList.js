import project03 from './../media/projects/MovieApp.mp4'
import project06 from './../media/projects/06.jpg'
import project10 from './../media/projects/10.png'
import project11 from './../media/projects/quiz.mp4'
import project12 from './../media/projects/12.png'
import project01 from './../media/projects/agroton.mp4'

const projects = [
	{
		id: 0,
		title: 'Agroton',
		skills: 'HTML, CSS, JavaScript',
		media: project01,
		mediaType: 'video',
		gitHubLink: 'https://pauzhetsky.github.io/argoton/',
	},
	{
		id: 1,
		title: 'Movie app',
		skills: 'HTML, CSS, JavaScript',
		media: project03,
		mediaType: 'video',
		gitHubLink: 'https://pauzhetsky.github.io/MovieApp/',
	},
	{
		id: 2,
		title: 'Fashion',
		skills: 'HTML, CSS, JavaScript, ReactJS',
		media: project06,
		mediaType: 'image',
	},
	{
		id: 3,
		title: 'LK Cloveri',
		skills: 'HTML, CSS, JavaScript, VueJS',
		media: project10,
		mediaType: 'image',
	},
	{
		id: 4,
		title: 'Java Quiz',
		skills: 'HTML, CSS, JavaScript, ReactJS',
		media: project11,
		mediaType: 'video',
		gitHubLink: 'https://quiz-vert-eight.vercel.app/',
	},
	{
		id: 5,
		title: 'Netflix',
		skills: 'HTML, CSS, JavaScript, ReactJS',
		media: project12,
		mediaType: 'image',
		gitHubLink: 'https://netflix-mocha-kappa.vercel.app/',
	},
]

export { projects }
