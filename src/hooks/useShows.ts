import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
	getAllShows,
	getComingSoonShows,
	getFavoritesShows,
	getShow,
	getTrendingShows,
	toggleShowFavorite,
} from '../api/shows.api'
import type { Show } from '../types/show.types'

export const showsKeys = {
	all: ['shows'] as const,
	comingSoon: ['shows', 'coming-soon'] as const,
	one: (id: number) => ['shows', id] as const,
	trending: ['shows', 'trending'] as const,
	favorite: ['shows', 'favorite'] as const,
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

export const useFavoriteShows = () => {
	return useQuery<Show[]>({
		queryKey: showsKeys.favorite,
		queryFn: getFavoritesShows,
	})
}

export const useToggleFavorite = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: toggleShowFavorite,
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: showsKeys.all })

			const previousAllShows = queryClient.getQueryData<Show[]>(showsKeys.all)
			const previousOneShow = queryClient.getQueryData<Show>(showsKeys.one(id))

			queryClient.setQueryData<Show[]>(showsKeys.all, old =>
				old?.map(show =>
					show.id === id ? { ...show, isFavorite: !show.isFavorite } : show
				)
			)

			queryClient.setQueryData<Show>(showsKeys.one(id), old =>
				old ? { ...old, isFavorite: !old.isFavorite } : old
			)

			return { previousAllShows, previousOneShow }
		},
		onError: (_err, id, context) => {
			if (context?.previousAllShows) {
				queryClient.setQueryData(showsKeys.all, context.previousAllShows)
			}
			if (context?.previousOneShow) {
				queryClient.setQueryData(showsKeys.one(id), context.previousOneShow)
			}
		},
		onSettled: (_data, _err, id) => {
			queryClient.invalidateQueries({ queryKey: showsKeys.all })
			queryClient.invalidateQueries({ queryKey: showsKeys.one(id) })
		},
	})
}
