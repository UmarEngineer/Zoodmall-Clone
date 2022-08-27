import { Gadgets, KitchenProducts, MobilePhones, PCProducts, ElectBtn } from '../images/Elect12'
import { BrandCarousel } from './Brand_Carousel'
import './Styles/Elect12.css'

const Elect12 = () => {

    const ElectImages = [Gadgets, KitchenProducts, MobilePhones, PCProducts]
  
    return (
    <section className='elect12'>
        <div className='elect-btn'>
            <img src={ElectBtn} alt="Elect Btn" />
        </div>
        <div className="elect-cards">
            {ElectImages.map((electImage, i) => (
                <div className="elect-card-items">
                    <div className="elect-card">
                        <img src={electImage.link} alt={`${electImage.name} rasmi`} />
                    </div>
                    <p className="elect-text">
                        {electImage.name}
                    </p>
                </div>
            ))}
        </div>

        <div className='elect-carousel'>
            <BrandCarousel />
        </div>
    </section>
  )
}

export default Elect12