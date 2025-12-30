import ShowCard from '../components/ShowCard'
import H2 from '../components/UI/H2'
import { useFavoriteShows } from '../hooks/useShows'

const FavoriteShowsPage = () => {
	const { data: favoriteShows } = useFavoriteShows()
	return (
		<div>
			<H2>Favorite Shows</H2>
			<div className='flex gap-4 flex-wrap'>
				{favoriteShows?.map(show => (
					<ShowCard key={show.id} show={show} />
				))}
			</div>
		</div>
	)
}
export default FavoriteShowsPage
