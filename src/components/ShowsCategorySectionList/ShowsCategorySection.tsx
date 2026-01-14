import type { Show } from '../../types/show.types'
import ShowsCategorySwiper from '../ShowsCategorySwiper'
import H2 from '../UI/H2'

interface IProps {
	shows: Show[] | undefined
	showsCategory: string
}

const ShowsCategorySection = ({ shows, showsCategory }: IProps) => {
	return (
		<section className='relative'>
			<H2>{showsCategory}</H2>
			<ShowsCategorySwiper shows={shows} />
		</section>
	)
}
export default ShowsCategorySection
