import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import './index.css'
import { router } from './router.tsx'
import { enableMocking } from './services/showsApiMocking.services.ts'

async function main() {
	const queryClient = new QueryClient()
	await enableMocking()
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<RouterProvider router={router} />
				</ThemeProvider>
			</QueryClientProvider>
		</StrictMode>
	)
}

main()
