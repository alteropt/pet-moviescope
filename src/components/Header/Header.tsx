import Avatar from '../UI/Avatar'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
	return (
		<header className='py-6 px-12 border-b border-[#9c9d9d20] flex justify-between items-center'>
			<HeaderNavigation />
			<div>
				<Avatar />
			</div>
		</header>
	)
}
export default Header
