import './Styles/NavbarTop.css'
import { BsEye, } from 'react-icons/bs'
import {  AiOutlineStar } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { IoPersonOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { ZoodMallLogo } from '../images/icons';

const NavbarTop = () => {
    
    const NavbarTopItem =  document.querySelector('.navbar-top-stick');
    window.addEventListener('scroll', () => {
        if(window.scrollY === 0){
            NavbarTopItem.classList.remove('sticky-open')
        }
        if(window.scrollY >= 150){
            NavbarTopItem.classList.add('sticky-open')
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
        </div>


        <div className="navbar-top">
            <div className="navbar-top-text">
                <a href='#!' className='navbar-top-text__items'>
                    <BsEye />
                    <div>Jozibador takliflar</div>
                </a>
                <a href='#!' className='navbar-top-text__items'>
                    <AiOutlineStar />
                    <div>Mashhur toifalar</div>
                </a>
                <a href='#!' className='navbar-top-text__items'>
                    <BiShoppingBag />
                    <div> ZOODMALL'DA SOTISH</div>
                </a>
            </div>

            <div className="navbar-top-items">
                <select className='navbar-top-select'>
                    <option value="uz" key="uz">UZ</option>
                    <option value="en" key="en">EN</option>
                    <option value="ru" key="ru">RU</option>
                </select>

                <a href='#!' className='navbar-top-items__items'>
                    <IoPersonOutline />
                    <div>Kirish</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavbarTop