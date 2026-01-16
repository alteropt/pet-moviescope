import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '../../store/themeStore'

const ToggleThemeButton = () => {
	const toggleTheme = useThemeStore(state => state.toggleTheme)
	const theme = useThemeStore(state => state.theme)

	return (
		<button
			onClick={toggleTheme}
			className='border border-(--text-color) p-2 cursor-pointer rounded-full'
		>
			{theme === 'light' && <Moon />}
			{theme === 'dark' && <Sun />}
		</button>
	)
}
export default ToggleThemeButton
