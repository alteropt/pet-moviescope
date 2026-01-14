import { useComingSoonShows, useTrendingShows } from './useShows'

export const useShowsCateroriesData = () => {
	const { data: trendingShows } = useTrendingShows()
	const { data: comingSoonShows } = useComingSoonShows()

	const showsCategoriesData = [
		{ showsCategory: 'Trending', shows: trendingShows },
		{ showsCategory: 'Coming Soon', shows: comingSoonShows },
	]

	return showsCategoriesData
}
