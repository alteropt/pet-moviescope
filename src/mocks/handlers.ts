import { http, HttpResponse } from 'msw'
import type { Show } from '../types/show.types'
import { shows } from './data/shows.data'

if (!localStorage.getItem('shows')) {
	localStorage.setItem('shows', JSON.stringify(shows))
}
const storedShows: Show[] = JSON.parse(localStorage.getItem('shows') as string)
const resultedShows: Show[] = storedShows.length ? storedShows : shows

export const handlers = [
	http.get('/api/shows', () => {
		return HttpResponse.json(resultedShows)
	}),

	http.get('/api/shows/trending', () => {
		return HttpResponse.json(resultedShows.filter(show => show.isTrending))
	}),

	http.get('/api/shows/coming-soon', () => {
		return HttpResponse.json(resultedShows.filter(show => show.isComingSoon))
	}),

	http.get('/api/shows/favorites', () => {
		return HttpResponse.json(resultedShows.filter(show => show.isFavorite))
	}),

	http.get('/api/shows/:id', ({ params }) => {
		const { id } = params
		const show = resultedShows.find(show => show.id === Number(id))

		if (!show) {
			return HttpResponse.json({ message: 'Show not found' }, { status: 404 })
		}

		return HttpResponse.json(show)
	}),

	http.patch('/api/shows/:id/favorite/toggle', ({ params }) => {
		const show = resultedShows.find(s => s.id === Number(params.id))

		if (!show) {
			return HttpResponse.json({ message: 'Not found' }, { status: 404 })
		}

		show.isFavorite = !show.isFavorite
		return HttpResponse.json(show)
	}),
]
