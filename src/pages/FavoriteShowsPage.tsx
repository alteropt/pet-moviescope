import ShowsList from '../components/ShowsList'
import H2 from '../components/UI/H2'
import { useFavoriteShows } from '../hooks/useShows'

const FavoriteShowsPage = () => {
	const { data: favoriteShows } = useFavoriteShows()
	return (
		<div>
			<H2>Favorite Shows</H2>
			<ShowsList shows={favoriteShows} />
		</div>
	)
}
export default FavoriteShowsPage
