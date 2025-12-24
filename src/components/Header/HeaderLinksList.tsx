import { Link } from 'react-router'
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
						<Link to={link.link} key={link.link}>
							{link.name}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
export default HeaderLinksList
