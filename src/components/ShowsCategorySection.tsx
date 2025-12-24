import type { Show } from '../types/show.types'
import ShowsCategorySwiper from './ShowsCategorySwiper'

interface IProps {
	shows: Show[] | undefined
	showsCategory: string
}

const ShowsCategorySection = ({ shows, showsCategory }: IProps) => {
	return (
		<section className='relative'>
			<h2 className='font-bold text-2xl mb-4'>
				<a href='/'>{showsCategory}</a>
			</h2>
			<ShowsCategorySwiper shows={shows} />
		</section>
	)
}
export default ShowsCategorySection
