import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Styles/TopCategoriesSlider.css"
import { Asboblar, Earphones, Laptops, PowerTools, Parfyum, Smartwatches, TVs, Watches, } from '../images/TopCategories'

export const TopCategoriesSlider =  () => {
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
    loop: true
  })

  return (
    <div ref={sliderRef} className="keen-slider">
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide1">
            <img src={TVs} alt="top categories slide" />
            <p>Televizorlar</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide2">
            <img src={Smartwatches} alt="top categories slide" />
            <p>Smart-soatlar</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide3">
            <img src={Asboblar} alt="top categories slide" />
            <p>Asboblar to'plami</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide4">
            <img src={Parfyum} alt="top categories slide" />
            <p>Erkaklar parfyumi</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide5">
            <img src={Laptops} alt="top categories slide" />
            <p>Noutbuklar</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide6">
            <img src={Earphones} alt="top categories slide" />
            <p>Quloqchinlar</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide7">
            <img src={PowerTools} alt="top categories slide" />
            <p>Elektr asboblari</p>
        </div>
    </a>
     <a href='#!' className="top-categories-slider-item">
        <div className="keen-slider__slide categories-number-slide8">
            <img src={Watches} alt="top categories slide" />
            <p>Erkaklar soatlari</p>
        </div>
    </a>
    </div>
  )
}
