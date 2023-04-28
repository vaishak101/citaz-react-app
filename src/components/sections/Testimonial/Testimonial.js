import "./Testimonial.css"

function Testimonial() {
  return (
    <section className="testimonials section" id="testimonials">
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
              <img src="img/user/user-1.jpg" className="slide_content__img u-margin-bottom-small" alt="User Image" />
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
              <img src="img/user/user-2.jpg" className="slide_content__img u-margin-bottom-small" alt="User Image" />
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
              <img src="img/user/user-3.jpg" className="slide_content__img u-margin-bottom-small" alt="User Image" />
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
              <img src="img/user/user-4.jpg" className="slide_content__img u-margin-bottom-small" alt="User Image" />
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
              <img src="img/user/user-5.jpg" className="slide_content__img u-margin-bottom-small" alt="User Image" />
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
          <button className="slider__btn slider__btn--left">&larr;</button>
          <button className="slider__btn slider__btn--right">&rarr;</button>
          <div className="dots__container"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;