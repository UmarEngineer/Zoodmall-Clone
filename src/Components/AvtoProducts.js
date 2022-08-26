import {  AutoElc, AutoTires, AutoIntreior, AutoCare, AutoBtn } from '../images/AutoProducts'
import { BrandCarousel } from './Brand_Carousel2'
import './Styles/Elect12.css'

const AutoProducts = () => {
  return (
    <section className='elect12'>
        <div className='elect-btn'>
            <img src={AutoBtn} alt="Elect Btn" />
        </div>
        <div className="elect-cards">
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={AutoElc} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Avto Elektronika
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={AutoTires} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Avto uchun disk va shina
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={AutoCare} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Auto parvarishi
                </p>
            </div>
            <div className="elect-card-items">
                <div className="elect-card">
                    <img src={AutoIntreior} alt='Gadgets' />
                </div>
                <p className="elect-text">
                    Salon aksessuarlari
                </p>
            </div>
        </div>

        <div className='elect-carousel'>
            <BrandCarousel />
        </div>
    </section>
  )
}

export default AutoProducts