import Logo from '../UI/Logo'
import SidebarLinksNav from './SidebarLinksNav'

const Sidebar = () => {
	return (
		<aside className='py-2 border-r dark:border-r-[#9c9d9d20] border-r-(--secondary-color) w-1/5'>
			<div className='ml-4 mb-4'>
				<Logo />
			</div>
			<SidebarLinksNav />
		</aside>
	)
}

export default Sidebar
