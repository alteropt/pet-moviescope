import { Search, Settings2 } from 'lucide-react'
import avatar from '../assets/avatar.jpg'
import { headerLinksData } from '../data/navlinks.data'

const Header = () => {
	return (
		<header className='absolute w-4/5 right-0 pt-6 py-6 px-12 border-b border-[#9c9d9d20] flex justify-between items-center'>
			<nav className='flex items-center gap-12'>
				<ul className='flex gap-12'>
					{headerLinksData.map(link => {
						return (
							<li className='text-(--secondary-color) hover:text-(--text-color) transition-all duration-300 w-max font-semibold'>
								<a href={link.link} key={link.link}>
									{link.name}
								</a>
							</li>
						)
					})}
				</ul>
				<div className='relative'>
					<label
						htmlFor='search'
						className='cursor-pointer absolute left-4 top-1/2 translate-y-[-50%]'
					>
						<Search />
					</label>
					<input
						type='text'
						name='search'
						id='search'
						placeholder='Search here...'
						className='outline-0 rounded-full border-[#9c9d9d40] border px-12 py-3 focus:border-(--text-color) transition-colors duration-300'
					/>
					<Settings2 className='absolute right-4 top-1/2 translate-y-[-50%] cursor-pointer' />
				</div>
			</nav>
			<div>
				<a
					href='/profile'
					className='block w-12 h-12 overflow-hidden rounded-full border-2 border-(--accent-color)'
				>
					<img
						src={avatar}
						alt='avatar'
						className='w-full h-full object-cover'
					/>
				</a>
			</div>
		</header>
	)
}
export default Header
