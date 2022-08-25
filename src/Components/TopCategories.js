import { MdKeyboardArrowRight } from 'react-icons/md'
import { TopCategoriesSlider } from './TopCategoriesSlider'
import './Styles/TopCategories.css'

const TopCategories = () => {
  return (
    <div className='top-categories'>
      <div className="top-categories-head">
        <h2>
          Mashhur toifalar
        </h2>
        <a href='#!'>
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>
      <div className='top-categories-slider'>
        <TopCategoriesSlider />
      </div>
    </div>
  )
}

export default TopCategories