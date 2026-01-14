import { useLocation } from 'react-router'
import ShowsList from '../components/ShowsList'
import H2 from '../components/UI/H2'
import { useShows } from '../hooks/useShows'
import { filterShowsByQuery } from '../utils/filterShowsByQuery'
import { getSearchQuery } from '../utils/getSearchQuery'

const ShowsPage = () => {
	const { data: shows } = useShows()

	const location = useLocation()
	const searchQuery = getSearchQuery(location)

	const filteredShows = filterShowsByQuery(shows, searchQuery)

	return (
		<div>
			<H2>Shows</H2>
			<ShowsList shows={filteredShows} />
		</div>
	)
}
export default ShowsPage
