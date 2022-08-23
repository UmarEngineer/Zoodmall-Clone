import mainBanner from '../images/banners/main_banner.png'
import mainBanner2 from '../images/banners/main_banner_xiomi.png'
import mainBanner3 from '../images/banners/main_banner_newElc.jpg'
import { Cashback, Electronics, Exclusive, FreeShipping, HugeSales, Installment, Local, NewArrial } from '../images/IconsHome'
import './Styles/Hero.css'
import { GalaxyA52, RedMiKulrang, RedMINote } from '../images/FlashSale'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-scroll">
        <div>
          <a href="!#">
            <img src={mainBanner} alt="Main Banner" />
          </a>
        </div>
        <div>
          <a href="!#">
            <img src={mainBanner2} alt="Main Banner 2" className='hidden' />
          </a>
        </div>
        <div>
          <a href="!#">
            <img src={mainBanner3} alt="Main Banner 3" className="hidden" />
          </a>
        </div>
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
        <div className="flash-text">
          <div className="flash-text-head">
            Smartfonlar x12 -gacha muddatli to'lovga
          </div>
          <div className='flash-text-boxes'>
            <div className='box'>
              <div>12</div>
              <div>Soatlar</div>
            </div>
            <div className='box'>
              <div>10</div>
              <div>Daqiqalar</div>
            </div>
            <div className='box'>
              <div>32</div>
              <div>Soniyalar</div>
            </div>
          </div>
          <div className="flash-text-link">
            <a href="!#">
              Boshqalarni ko'rsatish
            </a>
          </div>
        </div>

        <div className="flash-scroll">
          <div className="flash-scroll-box">
            <div>
              <img src={RedMINote} alt="Redmi 10 C" />
            </div>

            <div>
              <div>
                Smartfon Xiaomi Redmi Note 11 4/64GB, EU, Grafit kulrang
              </div>
              <div>
                UZS 598,400
              </div>
              <div>
                loading....
              </div>
            </div>
          </div>

          <div className="flash-scroll-box">
            <div>
              <img src={GalaxyA52} alt="Redmi 10 C" />
            </div>

            <div>
              <div>
                Smartfon Samsung Galaxy A32 6/128 GB qora/binafsha rang 
              </div>
              <div>
                UZS 752,000
              </div>
              <div>
                loading....
              </div>
            </div>
          </div>

          <div className="flash-scroll-box">
            <div>
              <img src={RedMiKulrang} alt="Redmi 10 C" />
            </div>

            <div>
              <div>
                Smartfon Xiaomi Redmi Note 11 4/64GB, EU, Grafit kulrang
              </div>
              <div>
                UZS 673,180
              </div>
              <div>
                loading....
              </div>
            </div>
          </div>
        </div>

      </div>
    
    
    
    
    
    
    </div>

  )
}

export default Hero