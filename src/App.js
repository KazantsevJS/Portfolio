import './styles/main.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'

import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	)
}

export default App
