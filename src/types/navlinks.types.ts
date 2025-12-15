import type React from 'react'

export type sidebarLink = {
	name: string
	icon: React.ReactNode
	link: string
}

export type sidebarLinks = {
	name: string
	links: sidebarLink[]
}[]

export type headerLinks = {
	name: string
	link: string
}[]
