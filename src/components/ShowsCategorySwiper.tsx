import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Show } from '../types/show.types'
import ShowCard from './ShowCard'

const ShowsCategorySwiper = ({ shows }: { shows: Show[] | undefined }) => {
	return (
		<Swiper
			slidesPerView={4}
			spaceBetween={20}
			modules={[Navigation]}
			className='w-full static!'
			navigation={{
				prevEl: '.swiper-prev',
				nextEl: '.swiper-next',
			}}
		>
			{shows?.map(show => (
				<SwiperSlide key={show.id} className='rounded-xl overflow-hidden'>
					<ShowCard show={show} />
				</SwiperSlide>
			))}

			<div className='absolute top-0 right-0 flex gap-4 [&>button]:disabled:opacity-50 [&>button]:disabled:cursor-not-allowed [&>button]:border [&>button]:p-1.5 [&>button]:rounded-full [&>button]:cursor-pointer'>
				<button className='swiper-prev'>
					<ArrowLeft />
				</button>
				<button className='swiper-next'>
					<ArrowRight />
				</button>
			</div>
		</Swiper>
	)
}
export default ShowsCategorySwiper
