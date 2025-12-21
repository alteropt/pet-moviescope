import { headerLinksData } from '../../data/navlinks.data'

const HeaderLinksList = () => {
	return (
		<ul className='flex gap-12'>
			{headerLinksData.map(link => {
				return (
					<li
						className='text-(--secondary-color) hover:text-(--text-color) transition-all duration-300 w-max font-semibold'
						key={link.name}
					>
						<a href={link.link} key={link.link}>
							{link.name}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
export default HeaderLinksList
