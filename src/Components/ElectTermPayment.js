import { MdKeyboardArrowRight } from "react-icons/md";
import { ChangyutgichXiomi, Novey, SamsungKirYuvish, XiomiMiBand } from "../images/ElectTermPayment";
import { MiniFlagUz, MiniLogo } from "../images/icons";
import './Styles/ElectTermPayment.css'

const ElectTermPayment = () => {
  return (
    <div className="elect-term">
      <div className="elect-term-head top-categories-head">
        <h2>Elektronika x12 -gacha muddatli to'lovga</h2>
        <a href="#!">
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>
      <div className="elect-term-items">
         <div className="elect-term-item">
            <a href="#!">
               <div className="elect-term-img">
                  <img src={Novey} alt="Novey telefoni" />
               </div>
               <div className="elect-term-text">
                  <div className="elect-text-title">                 
                     Telefon Novey A70R, 2SIM, qora, Xitoy
                  </div>
                  <div className="elect-text-totalprice">
                     <b>UZS 399,500</b>
                  </div>
                  <div className="elect-text-payment">
                     <p>
                        <img src={MiniLogo} width='12' height='12' alt="Zoodmall mini_logo" />
                        <span>UZS 99,875</span>
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

         <div className="elect-term-item">
            <a href="#!">
               <div className="elect-term-img">
                  <img src={ChangyutgichXiomi} alt="Xiomi Changyutgichi" />
               </div>
               <div className="elect-term-text">
                  <div className="elect-text-title">                 
                     Telefon Novey A70R, 2SIM, qora, Xitoy
                  </div>
                  <div className="elect-text-totalprice">
                     <b>UZS 399,500</b>
                  </div>
                  <div className="elect-text-payment">
                     <p>
                        <img src={MiniLogo} width='12' height='12' alt="Zoodmall mini_logo" />
                        <span>UZS 99,875</span>
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

         <div className="elect-term-item">
            <a href="#!">
               <div className="elect-term-img">
                  <img src={XiomiMiBand} alt="Xiomi Mi Band" />
               </div>
               <div className="elect-term-text">
                  <div className="elect-text-title">                 
                     Telefon Novey A70R, 2SIM, qora, Xitoy
                  </div>
                  <div className="elect-text-totalprice">
                     <b>UZS 399,500</b>
                  </div>
                  <div className="elect-text-payment">
                     <p>
                        <img src={MiniLogo} width='12' height='12' alt="Zoodmall mini_logo" />
                        <span>UZS 99,875</span>
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

         <div className="elect-term-item">
            <a href="#!">
               <div className="elect-term-img">
                  <img src={SamsungKirYuvish} alt="Samsung kir yuvish mashinasi" />
               </div>
               <div className="elect-term-text">
                  <div className="elect-text-title">                 
                     Telefon Novey A70R, 2SIM, qora, Xitoy
                  </div>
                  <div className="elect-text-totalprice">
                     <b>UZS 399,500</b>
                  </div>
                  <div className="elect-text-payment">
                     <p>
                        <img src={MiniLogo} width='12' height='12' alt="Zoodmall mini_logo" />
                        <span>UZS 99,875</span>
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
      </div>
    </div>
  );
};

export default ElectTermPayment;
