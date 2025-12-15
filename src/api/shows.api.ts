import type { Show } from '../types/show.types'

export const getAllShows = async (): Promise<Show[]> => {
	const res = await fetch('/api/shows')
	if (!res.ok) throw new Error('Failed to fetch shows')
	return res.json()
}
