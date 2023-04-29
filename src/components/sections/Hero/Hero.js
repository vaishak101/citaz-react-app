import Header from './../../common/Header/Header';
import HeroImg from './../../../assets/img/hero.jpg';
import { useEffect } from 'react';
import "./Hero.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="hero_wrapper">
      <div className="container">
        <Header />
        <div className="hero" >
          <div className="img_wrap" data-aos="flip-right" data-aos-duration="1500">
            <img src={HeroImg} className="hero__img" alt="Hero" />
          </div>
          <div className="hero__text-box" data-aos="flip-left" data-aos-duration="1500">
            <h1 className="heading-primary">Your Ideal Banking Partner</h1>
            <p className="paragraphy">A fresh approach to banking !</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;