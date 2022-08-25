import { Gadgets, KitchenProducts, MobilePhones, PCProducts, ElectBtn } from '../images/Elect12'
import { BrandCarousel } from './Brand_Carousel'
import './Styles/Elect12.css'

const Elect12 = () => {
  return (
    <section className='elect12'>
        <div className='elect-btn'>
            <img src={ElectBtn} alt="Elect Btn" />
        </div>
        <div className="elect-cards">
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={Gadgets} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Gadjetlar
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={PCProducts} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Kompyuter mahsulotlari
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={KitchenProducts} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Oshxona texnikasi
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={MobilePhones} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Mobil telefonlar
                </p>
            </div>
        </div>

        <div className='elect-carousel'>
            <BrandCarousel />
        </div>
    </section>
  )
}

export default Elect12