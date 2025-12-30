import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'
import FavoriteShowsPage from './pages/FavoriteShowsPage'
import Homepage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ShowPage from './pages/ShowPage'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/shows/:id',
				element: <ShowPage />,
			},
			{
				path: '/shows/favorites',
				element: <FavoriteShowsPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
])
