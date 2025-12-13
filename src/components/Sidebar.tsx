import logo from '../assets/logo.png'
import { sidebarData } from '../data/sidebar.data'

const Sidebar = () => {
	return (
		<div className='py-2'>
			<a href='/' className='w-15 block ml-4 mb-4'>
				<img src={logo} alt='Logo' />
			</a>

			<div className='flex flex-col gap-6'>
				{sidebarData.map(block => {
					return (
						<div className='flex flex-col gap-3'>
							<h4 className='font-bold uppercase pl-8'>{block.name}</h4>
							<div className='flex flex-col'>
								{block.links.map(link => {
									return (
										<a
											href={link.link}
											className='relative text-(--secondary-color) pl-8 py-3 inline-flex w-fit items-center gap-2 hover:text-(--accent-color) transition-colors duration-300 text-sm before:content-[""] before:absolute before:w-1 before:top-1/2 before:rounded-r-2xl before:translate-y-[-50%] before:bg-(--accent-color) before:left-0 before:transition-all before:duration-300 before:h-0 hover:before:h-full hover:bg-linear-to-r hover:from-[#9c9d9d20] hover:to-(--background-color)'
										>
											{link.icon}
											{link.name}
										</a>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
