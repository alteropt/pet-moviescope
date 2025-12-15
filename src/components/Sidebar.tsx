import logo from '../assets/logo.png'
import { sidebarLinksData } from '../data/navlinks.data'

const Sidebar = () => {
	return (
		<aside className='py-2 border-r border-r-[#9c9d9d20] w-1/5'>
			<a href='/' className='w-15 block ml-4 mb-4'>
				<img src={logo} alt='Logo' />
			</a>

			<nav className='flex flex-col gap-6'>
				{sidebarLinksData.map(block => {
					return (
						<div className='flex flex-col gap-3' key={block.name}>
							<h4 className='font-bold uppercase pl-8'>{block.name}</h4>
							<ul className='flex flex-col'>
								{block.links.map(link => {
									return (
										<a
											key={link.name}
											href={link.link}
											className='relative text-(--secondary-color) pl-8 py-3 inline-flex w-fit items-center gap-2 hover:text-(--accent-color) transition-colors duration-300 text-sm before:content-[""] before:absolute before:w-1 before:top-1/2 before:rounded-r-2xl before:translate-y-[-50%] before:bg-(--accent-color) before:left-0 before:transition-all before:duration-300 before:h-0 hover:before:h-full hover:bg-linear-to-r hover:from-[#9c9d9d20] hover:to-(--background-color)'
										>
											{link.icon}
											{link.name}
										</a>
									)
								})}
							</ul>
						</div>
					)
				})}
			</nav>
		</aside>
	)
}

export default Sidebar
