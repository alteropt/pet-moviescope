import type { Location } from 'react-router'

export const getSearchQuery = (location: Location) => {
	const url = new URL('https://' + location.pathname + location.search)
	const searchQuery = url.searchParams.get('search') || ''

	return searchQuery
}
