import Header from './components/Header/Header'
import ShowCard from './components/ShowCard'
import Sidebar from './components/Sidebar/Sidebar'
import { useShows } from './hooks/useShows'

const App = () => {
	const { data } = useShows()
	return (
		<div className='min-h-screen flex'>
			<Sidebar />

			<div className='flex-1 flex flex-col'>
				<Header />
				<main className='px-12 py-6'>
					<div className='flex flex-wrap gap-8'>
						{data?.map(show => (
							<ShowCard key={show.id} show={show} />
						))}
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
