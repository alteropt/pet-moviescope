import { useQuery } from '@tanstack/react-query'
import {
	getAllShows,
	getComingSoonShows,
	getShow,
	getTrendingShows,
} from '../api/shows.api'
import type { Show } from '../types/show.types'

export const showsKeys = {
	all: ['shows'] as const,
	comingSoon: ['shows', 'coming-soon'] as const,
	one: (id: number) => ['shows', id] as const,
	trending: ['shows', 'trending'] as const,
}

export const useShows = () => {
	return useQuery<Show[]>({
		queryKey: showsKeys.all,
		queryFn: getAllShows,
	})
}

export const useComingSoonShows = () => {
	return useQuery<Show[]>({
		queryKey: showsKeys.comingSoon,
		queryFn: getComingSoonShows,
	})
}

export const useShow = (id: number) => {
	return useQuery<Show>({
		queryKey: showsKeys.one(id),
		queryFn: () => getShow(id),
	})
}

export const useTrendingShows = () => {
	return useQuery<Show[]>({
		queryKey: showsKeys.trending,
		queryFn: getTrendingShows,
	})
}
