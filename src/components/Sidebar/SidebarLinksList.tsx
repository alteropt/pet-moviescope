import type { sidebarLink } from '../../types/navlinks.types'
import SidebarLink from './SidebarLink'

const SidebarLinksList = ({ links }: { links: sidebarLink[] }) => {
	return (
		<>
			{links.map(link => {
				return <SidebarLink key={link.name} link={link} />
			})}
		</>
	)
}
export default SidebarLinksList
