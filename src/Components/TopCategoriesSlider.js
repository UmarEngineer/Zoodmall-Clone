import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Styles/TopCategoriesSlider.css";
import {
  Asboblar,
  Earphones,
  Laptops,
  PowerTools,
  Parfyum,
  Smartwatches,
  TVs,
  Watches,
} from "../images/TopCategories";

export const TopCategoriesSlider = () => {
  const TopCategories = [TVs, Smartwatches, Asboblar, Parfyum, Laptops, Earphones, PowerTools, Watches]
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 560px)": {
        slides: { perView: 4, spacing: 5 },
      },
      "(min-width: 900px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1050px)": {
        slides: { perView: 6, spacing: 10 },
      },
      "(min-width: 1100px)": {
        slides: { perView: 7, spacing: 10 },
      },
    },
    slides: { perView: 3 },
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {TopCategories.map((topCategory, i) => (
        <a href="#!" className="top-categories-slider-item" key={i}>
          <div className={`keen-slider__slide categories-number-slide${i}`}>
            <img src={topCategory.link} alt={`${topCategory.name} rasmi`} />
            <p>{topCategory.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
