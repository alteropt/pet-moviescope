import { useParams } from 'react-router'
import { useShow } from '../hooks/useShows'

const ShowPage = () => {
	const { id } = useParams<{ id: string }>()

	const { data: show } = useShow(Number(id))

	return (
		<div>
			<h1 className='text-3xl font-bold'>
				Show <img src={show?.poster} alt='' />
			</h1>
		</div>
	)
}

export default ShowPage
