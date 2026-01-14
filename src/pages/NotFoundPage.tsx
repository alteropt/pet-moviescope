import { Link } from 'react-router'

const NotFoundPage = () => {
	return (
		<div className='h-full flex items-center flex-col justify-center -mt-20 gap-2'>
			<h1 className='text-(--accent-color) text-3xl font-bold max-w-100 text-center'>
				The Page that You are Looking for is Not Found!
			</h1>
			<Link
				to='/'
				className='hover:text-(--accent-color) transition-colors duration-300'
			>
				Go to homepage
			</Link>
		</div>
	)
}
export default NotFoundPage
