import { useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
	useEffect(() => {
		const fetchTrendingMovies = async () => {
			const res = await fetch('/api/shows/coming-soon')
			const data = await res.json()
			console.log(data)
		}

		fetchTrendingMovies()
	}, [])

	return (
		<>
			<Header />
			<Sidebar />
			<main></main>
		</>
	)
}

export default App
