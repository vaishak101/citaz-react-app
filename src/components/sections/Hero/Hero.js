import Header from './../../common/Header/Header';
import HeroImg from './../../../assets/img/hero.jpg'
import "./Hero.css"

function Hero() {
  return (
    <section className="hero_wrapper">
      <div className="container">
        <Header />
        <div className="hero">
          <div className="img_wrap">
            <img src={HeroImg} className="hero__img" alt="Hero" />
          </div>
          <div className="hero__text-box">
            <h1 className="heading-primary">Your Ideal Banking Partner</h1>
            <p className="paragraphy">A fresh approach to banking !</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;