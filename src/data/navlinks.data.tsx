import {
	Calendar,
	CircleStop,
	Clock12,
	Heart,
	House,
	LogOut,
	MoonStar,
	Settings,
	User,
} from 'lucide-react'
import type { headerLinks, sidebarLinks } from '../types/navlinks.types'

export const sidebarLinksData: sidebarLinks = [
	{
		name: 'Menu',
		links: [
			{
				name: 'Home',
				link: '/',
				icon: <House />,
			},
			{
				name: 'Favorites',
				link: '/shows/favorites',
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

export const headerLinksData: headerLinks = [
	{
		name: 'TV Show',
		link: '/tv-show',
	},
	{
		name: 'Movies',
		link: '/movies',
	},
	{
		name: 'Animes',
		link: '/animes',
	},
]
