import Header from './components/Header/Header'
import ShowsCategorySection from './components/ShowsCategorySection'
import Sidebar from './components/Sidebar/Sidebar'
import { useComingSoonShows, useTrendingShows } from './hooks/useShows'

const App = () => {
	const { data: trendingShows } = useTrendingShows()
	const { data: comingSoonShows } = useComingSoonShows()
	return (
		<div className='min-h-screen flex'>
			<Sidebar />

			<div className='flex-1 flex flex-col overflow-hidden'>
				<Header />
				<main className='px-12 py-6 flex-1 space-y-12'>
					<ShowsCategorySection
						showsCategory='Trending'
						shows={trendingShows}
					/>
					<ShowsCategorySection
						showsCategory='Coming Soon'
						shows={comingSoonShows}
					/>
				</main>
			</div>
		</div>
	)
}

export default App
