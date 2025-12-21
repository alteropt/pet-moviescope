import { sidebarLinksData } from '../../data/navlinks.data'
import SidebarLinksList from './SidebarLinksList'

const SidebarLinksNav = () => {
	return (
		<nav className='flex flex-col gap-6'>
			{sidebarLinksData.map(block => {
				return (
					<div className='flex flex-col gap-3' key={block.name}>
						<h4 className='font-bold uppercase pl-8'>{block.name}</h4>
						<ul className='flex flex-col'>
							<SidebarLinksList links={block.links} />
						</ul>
					</div>
				)
			})}
		</nav>
	)
}
export default SidebarLinksNav
