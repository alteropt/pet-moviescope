import avatar from '../../assets/avatar.jpg'

const Avatar = () => {
	return (
		<a
			href='/profile'
			className='block w-12 h-12 overflow-hidden rounded-full border-2 border-(--accent-color)'
		>
			<img src={avatar} alt='avatar' className='w-full h-full object-cover' />
		</a>
	)
}
export default Avatar
