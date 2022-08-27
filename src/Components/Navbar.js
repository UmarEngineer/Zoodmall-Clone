import { ZoodMallLogo } from "../images/icons"
import './Styles/Navbar.css'
import { BsSearch } from 'react-icons/bs'
import { BiShoppingBag } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleOutline } from 'react-icons/io5'

const Navbar = () => {


  return (
    <div className='navbar'>
      <div className="navbar-top-section">
        <div className="hamburger-icon">
          <GiHamburgerMenu />
        </div>
        <a href="!#">
          <img src={ZoodMallLogo} alt="Zoodmall logo" width="160" height='30' />
        </a>
        <form className="search-form">
          <input type="text" placeholder="ZoodMall da qidirish" className="navbar-search"/>
          <BsSearch className="search-icon"/>
        </form>
        <div className="navbar-rigth">
        <a href="#!">
          <BsHeart />
        </a>
        <div className="basket">
            <a href="#!">
                <BiShoppingBag />
                <span>Savat</span>
            </a>
            <a href="#!">
                <IoPersonCircleOutline />
            </a>
        </div>
        </div>
      </div>



      <div>
        <ul className="navbar-items">
          <li className="navbar-item">
            <select className="navbar-item-select">
              <option value="1" key="1" defaultValue={true}>
                Barcha kategoriyalar
              </option>
              <option value="2" key="2">Ayollar kiyimlari</option>
              <option value="3" key="3">Erkaklar kiyimlari</option>
              <option value="4" key="4">Telefon va akksesuarlar</option>
              <option value="5" key="5">Kompyuter va ofis</option>
              <option value="6" key="6">Maishiy elektronika</option>
              <option value="7" key="7">Zargarlik buyumlari va akksesuarlar</option>
              <option value="8" key="8">Uy va bog'</option>
            </select>
          </li>
          <li className="navbar-item">
            <a href="!#">
              Ayollar kiyimlari
            </a>
          </li>
          <li className="navbar-item">
            <a href="!#">
              Erkaklar kiyimlari
            </a>
          </li>
          <li className="navbar-item">
            <a href="!#">
              Telefonlar va aksessuarlar
            </a>
          </li>
          <li className="navbar-item">
            <a href="!#">
              Kompyuter va ofis
            </a>
          </li>
          <li className="navbar-item">
            <a href="!#">
              Maishiy elektronika
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar