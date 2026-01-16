import type { ReactNode } from 'react'

const H2 = ({ children }: { children: ReactNode[] | ReactNode }) => {
	return <h2 className='font-bold text-2xl mb-4'>{children}</h2>
}
export default H2
