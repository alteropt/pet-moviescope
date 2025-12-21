import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { enableMocking } from './services/showsApiMocking.services.ts'

async function main() {
	await enableMocking()
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>
	)
}

main()
