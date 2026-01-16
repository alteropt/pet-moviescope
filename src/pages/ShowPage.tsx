import { Check, Plus } from 'lucide-react'
import { useParams } from 'react-router'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useShow, useToggleFavorite } from '../hooks/useShows'
import { getRatingClass } from '../utils/getRatingClass'

const ShowPage = () => {
	const { id } = useParams()
	const { data: show, isLoading } = useShow(Number(id))
	const toggleShowFavorite = useToggleFavorite()

	const { setShows, getShows } = useLocalStorage()

	function handleToggleFavorite() {
		if (!show) return
		toggleShowFavorite.mutate(show.id)

		const currentShows = getShows()

		const updatedShows = currentShows.map(s =>
			s.id === show.id ? { ...s, isFavorite: !s.isFavorite } : s,
		)

		setShows(updatedShows)
	}

	if (!id) return <div>Invalid show id</div>
	if (isLoading) return <div>Loading...</div>
	if (!show) return <div>Show is Not Found</div>

	return (
		<div className='relative h-screen w-full overflow-hidden flex items-center'>
			<video
				className='absolute inset-0 h-full w-full object-contain pointer-events-none filter blur-xs'
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
			>
				<source src={show.trailerUrl} type='video/mp4' />
			</video>

			<div className='absolute inset-0 bg-black/50' />
			<div className='relative z-10 text-white p-10'>
				<div className='flex items-center gap-2'>
					<h1 className='text-4xl font-bold'>{show.title}</h1>
					<span
						className={`block font-medium ${getRatingClass(show.rating)} p-0.5`}
					>
						{show.rating.toFixed(1)}
					</span>
				</div>
				<p className='my-4 max-w-xl'>{show.description}</p>

				<div>
					<p>
						<span className='font-bold'>Genre:</span> {show.genres.join(', ')}
					</p>
					<p>
						<span className='font-bold'>Release Date:</span> {show.releaseYear}
					</p>
					<p>
						<span className='font-bold'>Created by:</span>{' '}
						{show.creators.join(', ')}
					</p>
				</div>

				<div className='mt-8 flex gap-4'>
					<button className='flex items-center gap-2 border border-white cursor-pointer px-4 py-2 rounded-md'>
						Watch Now
					</button>
					<button
						className='flex items-center gap-2 border border-white cursor-pointer px-4 py-2 rounded-md'
						onClick={handleToggleFavorite}
					>
						{show.isFavorite ? (
							<>
								In Favorites <Check />
							</>
						) : (
							<>
								Add to Favorites <Plus />
							</>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ShowPage
