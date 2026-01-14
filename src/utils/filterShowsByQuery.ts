import type { Show } from '../types/show.types'

export const filterShowsByQuery = (
	shows: Show[] | undefined,
	query: string
) => {
	if (!shows) return

	return shows.filter(show =>
		show.title.toLowerCase().includes(query.toLowerCase())
	)
}
