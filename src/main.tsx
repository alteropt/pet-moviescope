import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import { router } from './router.tsx'
import { enableMocking } from './services/showsApiMocking.services.ts'

async function main() {
	const queryClient = new QueryClient()
	await enableMocking()
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</StrictMode>
	)
}

main()
