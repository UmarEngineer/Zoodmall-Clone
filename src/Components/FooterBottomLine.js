import React from 'react'
import { Humo, UzCard, ZoodPay } from '../images/icons'

const FooterBottomLine = () => {
  return (
    <div className='footer-bottomline'>
        <div>
            © 2020 ZoodMall quvonchli xaridlar
        </div>
        <div className='footer-bottomline-icons'>
            <div className='footer-bottomline-icon'>
                <img src={ ZoodPay } alt="ZoodPay logo" />
            </div>
            <div className='footer-bottomline-icon'>
                <img src={ UzCard } alt="UzCard logo" />
            </div>
            <div className='footer-bottomline-icon'>
                <img src={ Humo } alt="Humo logo" />
            </div>
        </div>
    </div>
  )
}

export default FooterBottomLine