import { MdKeyboardArrowRight } from "react-icons/md";
import {
    ElectrOyma, SimsizDrel, SimsizZarbDrel, Preferator
} from "../images/TopAsboblar";
import { MiniFlagUz, MiniLogo } from "../images/icons";
import "./Styles/ElectTermPayment.css";

const TopAsboblar = () => {

  const TopAsboblar = [ElectrOyma, SimsizDrel, SimsizZarbDrel, Preferator]
  return (
    <div className="elect-term">
      <div className="elect-term-head top-categories-head">
        <h2>Top asboblar</h2>
        <a href="#!">
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>
      <div className="elect-term-items">
        {TopAsboblar.map((topAsbob, i) => (
          <div className="elect-term-item" key={i}>
            <a href="#!">
              <div className="elect-term-img">
                <img
                  src={topAsbob.link}
                  alt={topAsbob.name}
                  title={topAsbob.name}
                />
              </div>
              <div className="elect-term-text">
                <div className="elect-text-title">
                  {topAsbob.name}
                </div>
                <div className="elect-text-totalprice">
                  <b>UZS {topAsbob.totalPrice}</b>
                </div>
                <div className="elect-text-payment">
                  <p>
                    <img
                      src={MiniLogo}
                      width="12"
                      height="12"
                      alt="Zoodmall mini_logo"
                    />
                    <span>UZS {topAsbob.monthlyPrice}</span>
                  </p>
                  <span>x4</span>
                </div>
                <div className="elect-text-rating">
                  <i></i>
                  <span>5</span>
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
    </div>
  );
};

export default TopAsboblar;
