import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = () => {
	return (
		<div className='min-h-screen flex'>
			<Sidebar />

			<div className='flex-1 flex flex-col overflow-hidden'>
				<Header />
				<main className='px-12 py-6 flex-1 space-y-12'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
export default MainLayout
