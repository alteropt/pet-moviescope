import { useQuery } from '@tanstack/react-query'
import { getAllShows } from '../api/shows.api'
import type { Show } from '../types/show.types'

export const useShows = () => {
	return useQuery<Show[] | undefined>({
		queryKey: ['shows'],
		queryFn: getAllShows,
	})
}
