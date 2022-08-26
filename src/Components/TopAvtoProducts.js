import { MdKeyboardArrowRight } from "react-icons/md";
import {
  AutoMonitorTesla,
  AutosignalMagicar,
  NeolineXcop,
  SignatureRadar,
} from "../images/TopAutoProducts";
import { MiniFlagUz, MiniLogo } from "../images/icons";
import "./Styles/ElectTermPayment.css";
import { BrandCarousel } from "./Brand_Carousel3";

const TopAutoProducts = () => {
  return (
    <div className="elect-term">
      <div className="elect-term-head top-categories-head">
        <h2>Top avto mahsulotlar</h2>
        <a href="#!">
          Hammasini ko'rsatish <MdKeyboardArrowRight />
        </a>
      </div>
      <div className="elect-term-items">
        <div className="elect-term-item">
          <a href="#!">
            <div className="elect-term-img">
              <img
                src={NeolineXcop}
                alt="Neoline X cop"
                title="Neoline X cop"
              />
            </div>
            <div className="elect-term-text">
              <div className="elect-text-title">
                Avtomoshina uchun mulyaj lyuk
              </div>
              <div className="elect-text-totalprice">
                <b>UZS 175,000</b>
              </div>
              <div className="elect-text-payment">
                <p>
                  <img
                    src={MiniLogo}
                    width="12"
                    height="12"
                    alt="Zoodmall mini_logo"
                  />
                  <span>UZS 49,700</span>
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

        <div className="elect-term-item">
          <a href="#!">
            <div className="elect-term-img">
              <img src={SignatureRadar} alt="Signature radari" />
            </div>
            <div className="elect-term-text">
              <div className="elect-text-title">
                Tormoz kolodkalari Ceramic Chevrolet Nexia 3 uchun
              </div>
              <div className="elect-text-totalprice">
                <b>UZS 230,000</b>
              </div>
              <div className="elect-text-payment">
                <p>
                  <img
                    src={MiniLogo}
                    width="12"
                    height="12"
                    alt="Zoodmall mini_logo"
                  />
                  <span>UZS 57,000</span>
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

        <div className="elect-term-item">
          <a href="#!">
            <div className="elect-term-img">
              <img src={AutosignalMagicar} alt="Magicar" />
            </div>
            <div className="elect-term-text">
              <div className="elect-text-title">
                Chevrolet Gentra va Lacetti avtomobillarida Tesla monitori
                2/32Gb
              </div>
              <div className="elect-text-totalprice">
                <b>UZS 1 280,000</b>
              </div>
              <div className="elect-text-payment">
                <p>
                  <img
                    src={MiniLogo}
                    width="12"
                    height="12"
                    alt="Zoodmall mini_logo"
                  />
                  <span>UZS 420,000</span>
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

        <div className="elect-term-item">
          <a href="#!">
            <div className="elect-term-img">
              <img src={AutoMonitorTesla} alt="Auto monitor" />
            </div>
            <div className="elect-term-text">
              <div className="elect-text-title">
                Avtomobil signalizatsiyasi Magicar 908
              </div>
              <div className="elect-text-totalprice">
                <b>UZS 2,183,000</b>
              </div>
              <div className="elect-text-payment">
                <p>
                  <img
                    src={MiniLogo}
                    width="12"
                    height="12"
                    alt="Zoodmall mini_logo"
                  />
                  <span>UZS 580,000</span>
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
      </div>
      <BrandCarousel />
    </div>
  );
};

export default TopAutoProducts;
