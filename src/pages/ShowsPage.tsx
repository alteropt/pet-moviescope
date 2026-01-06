import { useLocation } from 'react-router'
import ShowCard from '../components/ShowCard'
import H2 from '../components/UI/H2'
import { useShows } from '../hooks/useShows'

const ShowsPage = () => {
	const { data: shows } = useShows()

	const location = useLocation()
	const url = new URL('https://' + location.pathname + location.search)
	const searchQuery = url.searchParams.get('search')

	const filteredShows = searchQuery
		? shows?.filter(show =>
				show.title.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: shows

	return (
		<div>
			<H2>Shows</H2>
			<div className='flex gap-4 flex-wrap'>
				{filteredShows?.length === 0 ? (
					<p className='text-(--accent-color)'>No shows found!</p>
				) : (
					filteredShows?.map(show => <ShowCard key={show.id} show={show} />)
				)}
			</div>
		</div>
	)
}
export default ShowsPage
