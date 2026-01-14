import { useShowsCateroriesData } from '../../hooks/useShowsCategoriesData'
import ShowsCategorySection from './ShowsCategorySection'

const ShowsCategorySectionList = () => {
	const showsCategoriesData = useShowsCateroriesData()

	return (
		<>
			{showsCategoriesData.map(categoryData => {
				return (
					<ShowsCategorySection
						showsCategory={categoryData.showsCategory}
						shows={categoryData.shows}
					/>
				)
			})}
		</>
	)
}
export default ShowsCategorySectionList
