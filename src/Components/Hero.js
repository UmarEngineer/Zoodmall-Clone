import { Local, Installment, Cashback, PreperSchool, BestChina, SaleForElectronics, Exclusive, NewArrial } from '../images/IconsHome'
import './Styles/Hero.css'
import { Slider } from './Carousel'
import { CarouselFlash} from './CarouselFlash'
const Hero = () => {

  const IconsHome = [Local, Installment, Cashback, PreperSchool, BestChina, SaleForElectronics, Exclusive, NewArrial]


  return (
    <div className="hero">
      <div className="hero-scroll">
        <Slider />
      </div>

      <div className='hero-icons'>
        {IconsHome.map((iconHome, i) => (
          <div className='icon-item'>
            <a href="!#">
              <img src={iconHome.link} alt={`${iconHome.name} rasmi`} />
              <div className='icon-item__text'>{iconHome.name}</div>
            </a>
          </div>
        ))}
      </div>

      <div className="hero-flash--sale">
        <div className="hero-flash-sale">
          <div className="flash-text">
            <div className="flash-text-head">
              Smartfonlar x12 -gacha muddatli to'lovga
            </div>
            <div className='flash-text-boxes'>
              <div className='flash-box'>
                <div>12</div>
                <span>Soatlar</span>
              </div>
              <div className='flash-box'>
                <div>10</div>
                <span>Daqiqalar</span>
              </div>
              <div className='flash-box'>
                <div>32</div>
                <span>Soniyalar</span>
              </div>
            </div>
          </div>

          <div className="flash-scroll">
            <CarouselFlash />
          </div>
        </div>

        <div className="flash-text-link">
            <a href="!#">
              Boshqalarni ko'rsatish
            </a>
        </div>
      </div>
    
    
    
    
    
    
    </div>

  )
}

export default Hero