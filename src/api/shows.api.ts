import type { Show } from '../types/show.types'

export const getAllShows = async (): Promise<Show[]> => {
	const res = await fetch('/api/shows')
	if (!res.ok) throw new Error('Failed to fetch shows')
	return res.json()
}

export const getShow = async (id: number): Promise<Show | undefined> => {
	const res = await fetch(`/api/shows/${id}`)
	if (!res.ok) return undefined
	return res.json()
}

export const getTrendingShows = async (): Promise<Show[]> => {
	const res = await fetch('/api/shows/trending')
	if (!res.ok) throw new Error('Failed to fetch trending shows')
	return res.json()
}

export const getComingSoonShows = async (): Promise<Show[]> => {
	const res = await fetch('/api/shows/coming-soon')
	if (!res.ok) throw new Error('Failed to fetch coming soon shows')
	return res.json()
}
