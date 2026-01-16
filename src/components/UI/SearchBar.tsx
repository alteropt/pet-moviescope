import { Search, Settings2 } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const SearchBar = () => {
	const location = useLocation()
	const url = new URL(
		'https://localhost:3000' + location.pathname + location.search,
	)
	const searchQuery = url.searchParams.get('search')

	const [search, setSearch] = useState(searchQuery ?? '')

	const navigate = useNavigate()

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		navigate('/shows/all?search=' + search)
	}

	return (
		<form className='relative' onSubmit={handleSubmit}>
			<button
				type='submit'
				className='cursor-pointer absolute left-4 top-1/2 translate-y-[-50%]'
			>
				<Search />
			</button>
			<input
				type='text'
				name='search'
				id='search'
				placeholder='Search here...'
				className='outline-0 rounded-full dark:border-[#9c9d9d40] border-(--secondary-color) border px-12 py-3 focus:border-(--text-color) transition-colors duration-300 placeholder:text-(--text-color)'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<Settings2 className='absolute right-4 top-1/2 translate-y-[-50%] cursor-pointer' />
		</form>
	)
}
export default SearchBar
