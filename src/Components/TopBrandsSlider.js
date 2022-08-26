import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Apple,Artel, Bestway, Boss, Honor, Infinix, Intex, Lenove, LG, Magicar, Neoline, Samsung, Shivaki, Tecno, Vivo, Xiomi } from '../images/TopBrands'
import "keen-slider/keen-slider.min.css"
import "./Styles/TopBrandsSlider.css"

export const TopBrandsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
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
                disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                }
                />
            </>
            )}
        </div>
    </div>


      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide numbeer-slide1 top-brend-items">
            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Samsung} width="83" height='83' alt="Samsung logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Samsung
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Xiomi} width="83" height='83' alt="Xiomi logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Xiomi
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Apple} width="83" height='83' alt="Apple logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Apple
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Artel} width="83" height='83' alt="Artel logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Artel
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Neoline} width="83" height='83' alt="Neoline logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Neoline
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Tecno} width="83" height='83' alt="Tecno logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Tecno
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Vivo} width="83" height='83' alt="Vivo logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Vivo
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Intex} width="83" height='83' alt="Intex logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Intex
                    </div>
                </div>
            </a>
          </div>
          <div className="keen-slider__slide numbeer-slide2 top-brend-items">
          <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Lenove} width="83" height='83' alt="Lenove logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Lenove
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Shivaki} width="83" height='83' alt="Shivaki logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Shivaki
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Bestway} width="83" height='83' alt="Bestway logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Bestway
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Infinix} width="83" height='83' alt="Infinix logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Infinix
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Honor} width="83" height='83' alt="Honor logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Honor
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={LG} width="83" height='83' alt="LG logo" />
                    </div>
                    <div className="top-brend-item__text">
                        LG
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Magicar} width="83" height='83' alt="Magicar logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Magicar
                    </div>
                </div>
            </a>

            <a href="#!">
                <div className="top-brend-item">
                    <div className="top-brend-item__img">
                        <img src={Boss} width="83" height='83' alt="Boss logo" />
                    </div>
                    <div className="top-brend-item__text">
                        Boss
                    </div>
                </div>
            </a>
          </div>

        </div>
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
