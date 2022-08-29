import { MdKeyboardArrowRight } from "react-icons/md";
import {
  NeolineXcop, Delkor, KumhoShinasi, Charmhoo
} from "../images/TopAutoProducts";
import { MiniFlagUz, MiniLogo } from "../images/icons";
import "./Styles/ElectTermPayment.css";
import { BrandCarousel } from "./Brand_Carousel3";

const TopAutoProducts = () => {

  const topAvtoItems = [NeolineXcop, Delkor, KumhoShinasi, Charmhoo]
  return (
    <div className="elect-term">
      <div className="elect-term-head top-categories-head">
        <h2>Top avto mahsulotlar</h2>
        <a href="#!">
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>
      <div className="elect-term-items">
        {topAvtoItems.map((topAvtoItem, i) => (
          <div className="elect-term-item">
            <a href="#!">
              <div className="elect-term-img">
                <img
                  src={topAvtoItem.link}
                  alt={topAvtoItem.name}
                  title={topAvtoItem.name}
                />
              </div>
              <div className="elect-term-text">
                <div className="elect-text-title">
                  {topAvtoItem.name}
                </div>
                <div className="elect-text-totalprice">
                  <b>UZS {topAvtoItem.totalPrice}</b>
                </div>
                <div className="elect-text-payment">
                  <p>
                    <img
                      src={MiniLogo}
                      width="12"
                      height="12"
                      alt="Zoodmall mini_logo"
                    />
                    <span>UZS {topAvtoItem.monthlyPrice}</span>
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
        ))}
      </div>
      <BrandCarousel />
    </div>
  );
};

export default TopAutoProducts;
