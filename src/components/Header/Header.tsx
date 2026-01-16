import Avatar from '../UI/Avatar'
import ToggleThemeButton from '../UI/ToggleThemeButton'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
	return (
		<header className='py-6 px-12 border-b dark:border-[#9c9d9d20] border-(--secondary-color) flex justify-between items-center'>
			<HeaderNavigation />
			<div>
				<ToggleThemeButton />
			</div>
			<div>
				<Avatar />
			</div>
		</header>
	)
}
export default Header
