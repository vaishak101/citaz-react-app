import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./TabSection.css"

function TabSection() {

  const [tabNum, setTabNum] = useState(1);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="fade-right" className="operations section" id="operations">
      <div className="container">
        <div className="features__text-box">
          <h1 className="heading-primary">
            Citaz Operates Flexibly for your best experience
          </h1>
          <p className="heading-secondary">Operations</p>
        </div>
        <div className="operations__container">
          <div className="operations__container--btn">
            <button className={`${tabNum === 1 ? "op--active" : ""} operations__btn operations__btn--1`} onClick={() => setTabNum(1)}>Online Banking</button>
            <button className={`${tabNum === 2 ? "op--active" : ""} operations__btn operations__btn--2`} onClick={() => setTabNum(2)}>Mobile Banking</button>
            <button className={`${tabNum === 3 ? "op--active" : ""} operations__btn operations__btn--3`} onClick={() => setTabNum(3)}>24x7 Support
            </button>
          </div>
          <div className={`tab tab__1 ${tabNum === 1 ? 'tab__active' : ''}`}>
            <h1 className="heading-secondary--operations u-margin-bottom-small">
              Online Banking is Smooth
            </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              corporis voluptatibus alias vero autem fugiat eos reiciendis
              tenetur expedita? Vel incidunt nam quisquam rerum excepturi
              voluptate voluptas voluptates rem provident?Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Praesentium doloribus
              quos quod dolorem voluptatibus placeat in est enim, quisquam,
              eaque perferendis amet ut! Earum, voluptatem! Odit placeat illo
              ipsa vel?
            </p>
          </div>
          <div className={`tab tab__2 ${tabNum === 2 ? 'tab__active' : ''}`}>
            <h1 className="heading-secondary--operations u-margin-bottom-small">
              Apps for the new generation
            </h1>

            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              corporis voluptatibus alias vero autem fugiat eos reiciendis
              tenetur expedita? Vel incidunt nam quisquam rerum excepturi
              voluptate voluptas voluptates rem provident?Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Praesentium doloribus
              quos quod dolorem voluptatibus placeat in est enim, quisquam,
              eaque perferendis amet ut! Earum, voluptatem! Odit placeat illo
              ipsa vel?
            </p>
          </div>
          <div className={`tab tab__3 ${tabNum === 3 ? 'tab__active' : ''}`}>
            <h1 className="heading-secondary--operations u-margin-bottom-small">
              Call us anytime
            </h1>

            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              corporis voluptatibus alias vero autem fugiat eos reiciendis
              tenetur expedita? Vel incidunt nam quisquam rerum excepturi
              voluptate voluptas voluptates rem provident?Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Praesentium doloribus
              quos quod dolorem voluptatibus placeat in est enim, quisquam,
              eaque perferendis amet ut! Earum, voluptatem! Odit placeat illo
              ipsa vel?
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default TabSection;