import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { GalaxyA52, RedMiKulrang, RedMINote } from '../images/FlashSale'
import "keen-slider/keen-slider.min.css"
import './Styles/CarouselFlash.css'
import './Styles/Hero.css'

export const CarouselFlash = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
])

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide nummber-slide1" style={{minWidth: '440px'}}>
            <div className="flash-scroll-box">
                <div>
                    <img width='50' height='50' className='box-image' src={RedMINote} alt="Redmi 10 C" />
                </div>

                <div className='box-text'>
                <p className="box-text-head">
                    Smartfon Xiaomi Redmi Note 11 4/64GB, EU, Grafit kulrang
                </p>
                <p>
                    UZS 598,400
                </p>
                <div>
                    loading....
                </div>
                </div>
            </div>
          </div>
          <div className="keen-slider__slide nummber-slide2">
            <div className="flash-scroll-box">
                <div>
                    <img width='50' height='50' className='box-image' src={GalaxyA52} alt="Redmi 10 C" />
                </div>

                <div className='box-text'>
                <p className="box-text-head">
                    Smartfon Samsung Galaxy A32 6/128 GB qora/binafsha rang 
                </p>
                <p>
                    UZS 752,000
                </p>
                <div>
                    loading....
                </div>
                </div>
            </div>
          </div>
          <div className="keen-slider__slide nummber-slide3">
          <div className="flash-scroll-box">
            <div>
              <img width='50' height='50' className='box-image' src={RedMiKulrang} alt="Redmi 10 C" />
            </div>

            <div className='box-text'>
              <p className="box-text-head">
                Smartfon Xiaomi Redmi Note 11 4/64GB, EU, Grafit kulrang
              </p>
              <p>
                UZS 673,180
              </p>
              <div>
                loading....
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot2" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

