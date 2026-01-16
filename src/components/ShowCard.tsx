import { Link } from 'react-router'
import type { Show } from '../types/show.types'
import { getRatingClass } from '../utils/getRatingClass'

const ShowCard = ({ show }: { show: Show }) => {
	return (
		<Link
			to={`/shows/${show.id}`}
			key={show.id}
			className='shrink-0 w-40 sm:w-45 lg:w-50 relative group overflow-hidden rounded-xl'
		>
			<img
				src={show.poster}
				alt='poster'
				className='object-cover w-full aspect-3/4'
			/>

			<div className='absolute bottom-0 left-0 right-0 dark:bg-black/70 bg-white/80 px-4 py-6 flex gap-2 items-start justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-(--text-color)'>
				<h3 className='font-bold'>{show.title}</h3>
				<span
					className={`block font-medium ${getRatingClass(show.rating)} p-0.5`}
				>
					{show.rating.toFixed(1)}
				</span>
			</div>
		</Link>
	)
}

export default ShowCard
