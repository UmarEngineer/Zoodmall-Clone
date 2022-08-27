import { MdKeyboardArrowRight } from "react-icons/md";
import { TVPremier, PrinterCanon, MonitorArtel, ShivakiKirYuvish } from "../images/ElectTermPayment";
import { MiniFlagUz, MiniLogo } from "../images/icons";
import './Styles/ElectTermPayment.css'

const ElectTermPayment = () => {

   const ElectTermPaymentImages = [TVPremier, PrinterCanon, MonitorArtel, ShivakiKirYuvish]
  return (
    <div className="elect-term">
      <div className="elect-term-head top-categories-head">
        <h2>Elektronika x12 -gacha muddatli to'lovga</h2>
        <a href="#!">
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>

      <div className="elect-term-items">
         {ElectTermPaymentImages.map((electTermImage, i) => (
            <div className="elect-term-item">
               <a href="#!">
                  <div className="elect-term-img">
                     <img src={electTermImage.link} alt={`${electTermImage.name} rasmi`} />
                  </div>
                  <div className="elect-term-text">
                     <div className="elect-text-title">                 
                        {electTermImage.name}
                     </div>
                     <div className="elect-text-totalprice">
                        <b>{electTermImage.totalPrice}</b>
                     </div>
                     <div className="elect-text-payment">
                        <p>
                           <img src={MiniLogo} width='12' height='12' alt="Zoodmall mini_logo" />
                           <span>{electTermImage.monthlyPrice}</span>
                        </p>
                        <span>x4</span>
                     </div>
                     <div className="elect-text-rating">
                        <i></i>
                        <span>4.7</span>
                        <img src={MiniFlagUz} alt="O'zbekiston bayrog'i mini" width='19' height='16' />
                     </div>
                  </div>
               </a>
            </div>
         ))}
      </div>
    </div>
  );
};

export default ElectTermPayment;
