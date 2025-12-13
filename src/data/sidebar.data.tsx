import { Calendar, CircleStop, Clock12, Heart, House, LogOut, MoonStar, Settings, User } from 'lucide-react'
import type { sidebarLinks } from '../types/sidebar.types'

export const sidebarData: sidebarLinks = [
	{
		name: 'Menu',
		links: [
			{
				name: 'Home',
				link: '/',
				icon: <House />,
			},
			{
				name: 'Watch List',
				link: '/watchlist',
				icon: <Heart />,
			},
			{
				name: 'Coming soon',
				link: '/coming-soon',
				icon: <Calendar />,
			},
			{
				name: 'Discovery',
				link: '/discovery',
				icon: <Clock12 />,
			},
		],
	},
	{
		name: 'Social',
		links: [
			{
				name: 'Friends',
				link: '/friends',
				icon: <User />,
			},
			{
				name: 'Parties',
				link: '/parties',
				icon: <MoonStar />,
			},
			{
				name: 'Media',
				link: '/media',
				icon: <CircleStop />,
			},
		],
	},
	{
		name: 'General',
		links: [
			{
				name: 'Settings',
				link: '/settings',
				icon: <Settings />,
			},
			{
				name: 'Log Out',
				link: '/logout',
				icon: <LogOut />,
			},
		],
	},
]
