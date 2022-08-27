import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Apple,Artel, Bestway, Boss, Honor, Infinix, Intex, Lenove, LG, Magicar, Neoline, Samsung, Shivaki, Tecno, Vivo, Xiomi } from '../images/TopBrands'
import "keen-slider/keen-slider.min.css"
import "./Styles/TopBrandsSlider.css"


export const TopBrandsSlider = () => {
    const topBrands = [ Samsung, Artel, Bestway, Apple, Boss, Honor, Infinix, Intex, Lenove, LG, Magicar, Neoline, Shivaki, Tecno, Vivo, Xiomi]
    console.log(topBrands);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 4, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 900px)": {
        slides: { perView: 6, spacing: 10 },
      },
      "(min-width: 1100px)": {
        slides: { perView: 8, spacing: 10 },
      },
    },
    slides: { perView: 3 },
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (

    <>
    <div className="elect-term-head top-categories-head">
        <h2>Mashhur brendlar</h2>
   
       <div className='arrow-block'>
           {loaded && instanceRef.current && (
            <>
                <Arrow
                left
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                />

                <Arrow
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                }
                />
            </>
           )}
       </div>
    </div>

    <div ref={sliderRef} className="keen-slider top-brend-items">
        {loaded && topBrands.map((topBrand, i) => (
            <div className="keen-slider__slide numbeer-slide1" key={i}>
                <a href="#!">
                    <div className="top-brend-item">
                        <div className="top-brend-item__img">
                            <img src={topBrand.link} width="83" height='83' alt={`${topBrand.name} logo`} />
                        </div>
                        <div className="top-brend-item__text">
                            {topBrand.name}
                        </div>
                    </div>
                </a>
            </div>
        ))}
    </div>
 
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow-top-brand ${
        props.left ? "arrow--left-top-brand" : "arrow--right-top-brand"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
