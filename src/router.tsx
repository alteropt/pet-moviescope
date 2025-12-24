import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ShowPage from './pages/ShowPage'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/shows/:id',
				element: <ShowPage />,
			},
		],
	},
])
