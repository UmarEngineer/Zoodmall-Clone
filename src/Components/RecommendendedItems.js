import {
  Redmi10C464GB,
  Redmi10C4128GB,
  Redmi10A232GB,
  RedmiNote116128GB,
  RedmiNote116128GB2,
  RedmiNote11464GB,
  RedmiNote11464GBUE,
  RedmiNote10Pro8128GB,
  XiaomiRedmi10C4128GB,
  XiaomiRedmiNote11E,
  XiaomiRedmi10A364GB,
  XiaomiRedmi10Prime464GB,
  XiaomiRedmiNote11Pro8128GB,
  XiaomiRedmiNote114128GB,
  XiaomiRedmiNote10S664GB,
  Mi11T8128GB,
} from "../images/RecommendedProducts";

import { MiniFlagUz, MiniLogo } from "../images/icons";
import './Styles/Recommendended.css'

const RecommendendedItems = () => {
  const recItems = [
    Redmi10C464GB,
    Redmi10C4128GB,
    Redmi10A232GB,
    RedmiNote116128GB,
    RedmiNote116128GB2,
    RedmiNote11464GB,
    RedmiNote11464GBUE,
    RedmiNote10Pro8128GB,
    XiaomiRedmi10C4128GB,
    XiaomiRedmiNote11E,
    XiaomiRedmi10A364GB,
    XiaomiRedmi10Prime464GB,
    XiaomiRedmiNote11Pro8128GB,
    XiaomiRedmiNote114128GB,
    XiaomiRedmiNote10S664GB,
    Mi11T8128GB,
  ];
  return (
    <div className="rec">
      <div className="top-categories-head">Mijozlar tanlovi</div>

      <div className="rec-items">
        {recItems.map((recItem, i) => (
        //   <div className="rec-item">
            <div className="elect-term-item">
              <a href="#!">
                <div className="elect-term-img">
                  <img
                    src={recItem.link}
                    alt={recItem.name}
                    title={recItem.name}
                  />
                </div>
                <div className="elect-term-text">
                  <div className="elect-text-title">{recItem.name}</div>
                  <div className="elect-text-totalprice">
                    <b>UZS {recItem.totalPrice}</b>
                  </div>
                  <div className="elect-text-payment">
                    <p>
                      <img
                        src={MiniLogo}
                        width="12"
                        height="12"
                        alt="Zoodmall mini_logo"
                      />
                      <span>UZS {recItem.monthlyPrice}</span>
                    </p>
                    <span>x4</span>
                  </div>
                  <div className="elect-text-rating">
                    <i></i>
                    <span>4.7</span>
                    <img
                      src={MiniFlagUz}
                      alt="O'zbekiston bayrog'i mini"
                      width="19"
                      height="16"
                    />
                  </div>
                </div>
              </a>
            </div>
        //   </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendendedItems;
