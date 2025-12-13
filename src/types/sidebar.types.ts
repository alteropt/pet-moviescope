import type React from 'react'

export type sibebarLink = {
	name: string
	icon: React.ReactNode
	link: string
}

export type sidebarLinks = {
	name: string
	links: sibebarLink[]
}[]
