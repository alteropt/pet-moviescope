import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'

const NotFoundPage = () => {
	return (
		<div className='h-full flex items-center justify-center'>
			<div className='flex flex-col gap-2 items-center -mt-20'>
				<h1 className='text-(--accent-color) text-3xl font-bold max-w-100 text-center'>
					The Page that You are Looking for is Not Found!
				</h1>
				<Link
					to='/'
					className='hover:text-(--accent-color) transition-colors duration-300 flex items-center'
				>
					Go to homepage <ArrowRightIcon />
				</Link>
			</div>
		</div>
	)
}
export default NotFoundPage
