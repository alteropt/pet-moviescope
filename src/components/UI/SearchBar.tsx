import { Search, Settings2 } from 'lucide-react'

const SearchBar = () => {
	return (
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
	)
}
export default SearchBar
