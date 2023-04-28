import "./Testimonial.css"
import u1 from "./../../../assets/img/user/user-1.jpg"
import u2 from "./../../../assets/img/user/user-2.jpg"
import u3 from "./../../../assets/img/user/user-3.jpg"
import u4 from "./../../../assets/img/user/user-4.jpg"
import u5 from "./../../../assets/img/user/user-5.jpg"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {

  let slide;
  let curSlide;
  let maxSlide;

  useEffect(() => {
    AOS.init();
    slide = document.querySelectorAll('.slide');
    curSlide = 0;
    maxSlide = slide.length - 1;

    slider(0);

  }, [])

  //SLIDER


  const slider = function (cursl) {
    slide.forEach(
      (s, i) => {
        s.style.transform = `translate(${55 * (i - cursl)}%) scale(0.8)`
      }
    );
    slide.forEach((s, i) => {
      if (cursl === i) {
        slide[cursl].style.opacity = 1;
        slide[cursl].style.transform = 'scale(1)';
      }
      else {
        s.style.opacity = 0.3
      }
    }
    );
  };
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    // console.log(curSlide);
    slider(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    // console.log(curSlide);

    slider(curSlide);
  };


  return (
    <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="testimonials section" id="testimonials">
      <div className="container">
        <div className="features__text-box u-margin-bottom-medium">
          <h1 className="heading-primary">
            Here is what our customers want to say about us !
          </h1>
          <p className="heading-secondary">Testimonials</p>
        </div>
        <div className="slider">
          <div className="slide">
            <div className="slide_content">
              <img src={u1} className="slide_content__img u-margin-bottom-small" alt="User 1" />
              <h2 className="slide_content__name u-margin-bottom-medium">
                Lewis Joseph
              </h2>
              <p className="slide_content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam, neque, facilis animi corrupti sunt maxime aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="slide_content">
              <img src={u2} className="slide_content__img u-margin-bottom-small" alt="User 2" />
              <h2 className="slide_content__name u-margin-bottom-medium">
                Clarence Hansen
              </h2>
              <p className="slide_content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam, neque, facilis animi corrupti sunt maxime aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="slide_content">
              <img src={u3} className="slide_content__img u-margin-bottom-small" alt="User 3" />
              <h2 className="slide_content__name u-margin-bottom-medium">
                Jessie Hall
              </h2>
              <p className="slide_content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam, neque, facilis animi corrupti sunt maxime aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="slide_content">
              <img src={u4} className="slide_content__img u-margin-bottom-small" alt="User 4" />
              <h2 className="slide_content__name u-margin-bottom-medium">
                Charlie Hill
              </h2>
              <p className="slide_content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam, neque, facilis animi corrupti sunt maxime aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="slide_content">
              <img src={u5} className="slide_content__img u-margin-bottom-small" alt="User 5" />
              <h2 className="slide_content__name u-margin-bottom-medium">
                Shannon Romero
              </h2>
              <p className="slide_content__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam, neque, facilis animi corrupti sunt maxime aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.aliquam
                voluptates, cupiditate iste illum nam tempore. Facilis,
                mollitia eaque provident tenetur repellendus dolor.
              </p>
            </div>
          </div>
          <button className="slider__btn slider__btn--left" onClick={() => prevSlide()}>&larr;</button>
          <button className="slider__btn slider__btn--right" onClick={() => nextSlide()}>&rarr;</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;