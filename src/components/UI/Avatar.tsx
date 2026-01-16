import { Link } from 'react-router'
import avatar from '../../assets/avatar.jpg'

const Avatar = () => {
	return (
		<Link
			to='/profile'
			className='block w-12 h-12 overflow-hidden rounded-full border-2 border-(--accent-color)'
		>
			<img src={avatar} alt='avatar' className='w-full h-full object-cover' />
		</Link>
	)
}
export default Avatar
