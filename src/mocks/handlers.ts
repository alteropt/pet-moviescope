import { http, HttpResponse } from 'msw'
import { shows } from './data/shows.data'

export const handlers = [
	http.get('/api/movies', () => {
		return HttpResponse.json(shows)
	}),
]
