import { useParams } from 'react-router'
import { useShow } from '../hooks/useShows'

const ShowPage = () => {
	const { id } = useParams()
	const { data: show, isLoading, error } = useShow(Number(id))

	if (!id) return <div>Invalid show id</div>
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!show) return <div>Show is Not Found</div>

	return (
		<div className='relative h-screen w-full overflow-hidden'>
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
				<h1 className='text-4xl font-bold'>{show.title}</h1>
				<p className='mt-4 max-w-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
					distinctio fuga! Dolores iste tempore ducimus ipsam, quam eos
					voluptates quo dolorem pariatur tempora voluptate eveniet et maxime
					libero, illo eum?
				</p>
			</div>
		</div>
	)
}

export default ShowPage
