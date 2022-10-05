import { AppGalery, AppStore, Contact2, Facebook, GooglePlay, Instagram, Telegram, TikTok, Youtube, ZoodMallLogo } from "../images/icons"
import './Styles/Footer.css'
import FooterBottomLine from './FooterBottomLine'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="footer-item">
        <div className="footer-logo">
          <img src={ ZoodMallLogo } alt="Zoodmall logo" />
        </div>
        <div className="footer-item-title">
          Biz ijtimoiy tarmoqlarda
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://youtube.com">
              { Youtube }
            </a>
          </div>
          <div className="social-icon">
            <a href="https://facebook.com">
              { Facebook }
            </a>
          </div>
          <div className="social-icon">
            <a href="https://instagram.com">
              { Instagram }
            </a>
          </div>
          <div className="social-icon">
            <a href="https://tiktok.com">
              { TikTok }
            </a>
          </div>
          <div className="social-icon">
            <a href="https://telegram.org">
              { Telegram }
            </a>
          </div>
        </div>
          <div className="footer-item-title">
            Mobil ilovamizni yuklab oling
          </div>
        <div className="mobile-apps">
          <a href="https://appstore.com" className="mobile-app">
            <img src={ AppStore } alt="App Store" />
          </a>
          <a href="https://google.com" className="mobile-app">
            <img src={ GooglePlay } alt="Google Play" />
          </a>
          <a href="https://appgalery.com" className="mobile-app">
            <img src={ AppGalery } alt="App Galery" />
          </a>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-links">
          <div className="footer-link">
            <a href="#!">
              Zoodmall haqida
            </a>
          </div>
          <div className="footer-link">
            <a href="#!">
              Foydalanish shartlari
            </a>
          </div>
          <div className="footer-link">
            <a href="#!">
              Maxfiylik va xavfsizlik siyosati
            </a>
          </div>
          <div className="footer-link">
            <a href="#!">
              Mahsulotlarni va toʻlovlarni qaytarish siyosati
            </a>
          </div>
          <div className="footer-link">
            <a href="#!">
              ZOODMALL'DA SOTISH
            </a>
          </div>
          <div className="footer-link">
            <a href="#!">
              Careers
            </a>
          </div>
        </div>
      </div>

      <div className="footer-item">
        <p className='footer-item-contact'>ALOQA</p>
        <div className="footer-item-contact2">
          { Contact2 }
          <p>Savolingiz bormi?</p>
        </div>
        <button className="footer-action">
          Savol bering.
        </button>
      </div>
    </div> 
    <FooterBottomLine />
    </>
  )
}

export default Footer