import ShowsCategorySection from '../components/ShowsCategorySection'
import { useComingSoonShows, useTrendingShows } from '../hooks/useShows'

const Homepage = () => {
	const { data: trendingShows } = useTrendingShows()
	const { data: comingSoonShows } = useComingSoonShows()

	return (
		<>
			<ShowsCategorySection showsCategory='Trending' shows={trendingShows} />
			<ShowsCategorySection
				showsCategory='Coming Soon'
				shows={comingSoonShows}
			/>
		</>
	)
}
export default Homepage
