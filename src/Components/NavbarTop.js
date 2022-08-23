import './Styles/NavbarTop.css'
import { BsEye, } from 'react-icons/bs'
import {  AiOutlineStar } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { IoPersonOutline } from 'react-icons/io5';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { ZoodMallLogo } from '../images/icons';

const NavbarTop = () => {

    window.addEventListener('scroll', () => {
        const NavbarTop =  document.querySelector('.navbar-top-stick');
        if(window.scrollY === 0){
            NavbarTop.classList.remove('sticky-open')
        }
        if(window.scrollY >= 150){
            NavbarTop.classList.add('sticky-open')
        }
    })    

  return (
    <div className='navbar-t'>

        <div className="navbar-top-stick">
            <div className="navbar-top-sticky">
            <a href="!#">
                <img src={ZoodMallLogo} alt="Zoodmall logo" width="160" height='30' />
            </a>
            <form className="search-form">
                <input type="text" placeholder="ZoodMall da qidirish" className="navbar-search"/>
                <BsSearch className="search-icon"/>
            </form>
            <div className="navbar-rigth">
                <BsHeart />
                <div className="basket">
                <BiShoppingBag />
                <span>Savat</span>
                </div>
            </div>
            </div>
        </div>


        <div className="navbar-top">
            <div className="navbar-top-text">
                <div className='navbar-top-text__items'>
                    <BsEye />
                    <div>Jozibador takliflar</div>
                </div>
                <div className='navbar-top-text__items'>
                    <AiOutlineStar />
                    <div>Mashhur toifalar</div>
                </div>
                <div className='navbar-top-text__items'>
                    <BiShoppingBag />
                    <div> ZOODMALL'DA SOTISH</div>
                </div>
            </div>

            <div className="navbar-top-items">
                <select className='navbar-top-select'>
                    <option value="uz" key="uz">UZ</option>
                    <option value="en" key="en">EN</option>
                    <option value="ru" key="ru">RU</option>
                </select>

                <div className='navbar-top-items__items'>
                    <IoPersonOutline />
                    <div>Kirish</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarTop