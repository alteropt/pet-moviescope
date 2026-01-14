import type { Show } from '../types/show.types'
import ShowCard from './ShowCard'

const ShowsList = ({ shows }: { shows: Show[] | undefined }) => {
	return (
		<div className='flex gap-4 flex-wrap'>
			{shows?.map(show => (
				<ShowCard key={show.id} show={show} />
			))}
		</div>
	)
}
export default ShowsList
