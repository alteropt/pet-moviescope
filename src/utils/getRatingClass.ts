export function getRatingClass(rating: number) {
	if (rating >= 7) {
		return 'bg-green-700 text-white'
	} else if (rating >= 5) {
		return 'bg-amber-400 text-black'
	} else {
		return 'bg-red-500 text-white'
	}
}
