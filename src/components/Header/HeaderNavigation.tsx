import SearchBar from '../UI/SearchBar'
import HeaderLinksList from './HeaderLinksList'

const HeaderNavigation = () => {
	return (
		<nav className='flex items-center gap-12'>
			<HeaderLinksList />
			<SearchBar />
		</nav>
	)
}
export default HeaderNavigation
