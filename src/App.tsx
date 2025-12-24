import Header from './components/Header/Header'
import ShowsCategorySection from './components/ShowsCategorySection'
import Sidebar from './components/Sidebar/Sidebar'
import { useComingSoonShows, useTrendingShows } from './hooks/useShows'

const App = () => {
	const { data: trendingShows } = useTrendingShows()
	const { data: comingSoonShows } = useComingSoonShows()
	return (
		
	)
}

export default App
