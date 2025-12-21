import { http, HttpResponse } from 'msw'
import { shows } from './data/shows.data'

export const handlers = [
	http.get('/api/shows', () => {
		return HttpResponse.json(shows)
	}),

	http.get('/api/shows/trending', () => {
		return HttpResponse.json(shows.filter(show => show.isTrending))
	}),

	http.get('/api/shows/coming-soon', () => {
		return HttpResponse.json(shows.filter(show => show.isComingSoon))
	}),

	http.get('/api/shows/:id', ({ params }) => {
		const { id } = params
		const show = shows.find(show => show.id === Number(id))

		if (!show) {
			return HttpResponse.json({ message: 'Show not found' }, { status: 404 })
		}

		return HttpResponse.json(show)
	}),
]
