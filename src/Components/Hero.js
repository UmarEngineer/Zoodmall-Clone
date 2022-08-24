import { Cashback, Electronics, Exclusive, FreeShipping, HugeSales, Installment, Local, NewArrial } from '../images/IconsHome'
import './Styles/Hero.css'
import { Slider } from './Carousel'
import { CarouselFlash} from './CarouselFlash'
const Hero = () => {




  return (
    <div className="hero">
      <div className="hero-scroll">
        <Slider />
      </div>

      <div className='hero-icons'>
        <div className='icon-item'>
          <a href="!#">
            <img src={Local} alt="Flag-uz" />
            <div className='icon-item__text'>Mahalliy sotuvchilar</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={Installment} alt="Flag-uz" />
            <div className='icon-item__text'>Muddatli to'lov</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={Cashback} alt="Flag-uz" />
            <div className='icon-item__text'>Cashback</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={FreeShipping} alt="Flag-uz" />
            <div className='icon-item__text'>Maktabga tayyorgarlik</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={HugeSales} alt="Flag-uz" />
            <div className='icon-item__text'>Xitoydan eng yaxshisi</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={Electronics} alt="Flag-uz" />
            <div className='icon-item__text'>20% chegirma elektronikaga</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={Exclusive} alt="Flag-uz" />
            <div className='icon-item__text'>Ekslyuziv takliflar</div>
          </a>
        </div>
        <div className='icon-item'>
          <a href="!#">
            <img src={NewArrial} alt="Flag-uz" />
            <div className='icon-item__text'>Yangi kelgan mahsulotlar</div>
          </a>
        </div>
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