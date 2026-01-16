import { NavLink } from 'react-router'
import type { sidebarLink } from '../../types/navlinks.types'

const SidebarLink = ({ link }: { link: sidebarLink }) => {
	return (
		<NavLink
			to={link.link}
			className={({ isActive }) =>
				'relative text-(--secondary-color) pl-8 py-3 inline-flex w-fit items-center gap-2 transition-colors duration-300 text-sm before:content-[""] before:absolute before:w-1 before:top-1/2 before:rounded-r-2xl before:translate-y-[-50%] before:bg-(--accent-color) before:left-0 before:transition-all before:duration-300 before:h-0 hover:before:h-full dark:hover:bg-linear-to-r dark:hover:from-[#9c9d9d20] dark:hover:to-(--background-color) hover:text-(--accent-color) group' +
				(isActive
					? 'before:h-full dark:bg-linear-to-r from-[#9c9d9d20] to-(--background-color) text-(--accent-color)!'
					: '')
			}
		>
			<span className='group-hover:text-(--accent-color) transition-colors duration-300'>
				{link.icon}
			</span>
			{link.name}
		</NavLink>
	)
}
export default SidebarLink
