import type { Show } from '../types/show.types'
import { useShows } from './useShows'

export const useLocalStorage = () => {
	const { data: shows } = useShows()
	const getShows = (): Show[] => {
		const stored = localStorage.getItem('shows')
		if (stored) return JSON.parse(stored)
		return shows || []
	}

	const setShows = (shows: Show[]): void => {
		if (!shows) return
		localStorage.setItem('shows', JSON.stringify(shows || []))
	}

	return { getShows, setShows }
}
