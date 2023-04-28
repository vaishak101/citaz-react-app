import feat1 from './../../../assets/img/features/feature-1.jpg'
import feat2 from './../../../assets/img/features/feature-2.jpg'
import feat3 from './../../../assets/img/features/feature-3.jpg'
import feat4 from './../../../assets/img/features/feature-4.jpg'
import feat5 from './../../../assets/img/features/feature-5.jpg'

import "./Feature.css"

function Feature() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features__text-box">
          <h1 className="heading-primary">
            Everything you need to make your banking experience simpler.
          </h1>
          <p className="heading-secondary">Our Features</p>
        </div>
        <div className="composition">
          <div className="row">
            <div className="col-1-of-3">
              <div className="card card__1">
                <img src={feat1} className="card__img" alt="features 1" />
                <div className="card__content">
                  <h1 className="feature__card__heading u-margin-bottom-small">
                    Save More
                  </h1>
                  <p className="feature__card__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque molestiae error assumenda hic repudiandae?
                    Commodi sint animi, est officiis, hic distinctio ex totam
                    saepe voluptatum dolorum corrupti in reiciendis voluptas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card card__2">
                <img src={feat2} className="card__img" alt="features 2" />
                <div className="card__content">
                  <h1 className="feature__card__heading u-margin-bottom-small">
                    Invest in gold
                  </h1>
                  <p className="feature__card__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque molestiae error assumenda hic repudiandae?
                    Commodi sint animi, est officiis, hic distinctio ex totam
                    saepe voluptatum dolorum corrupti in reiciendis voluptas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card card__3">
                <img src={feat3} className="card__img" alt="features 3" />
                <div className="card__content">
                  <h1 className="feature__card__heading u-margin-bottom-small">
                    Flexible Loans
                  </h1>
                  <p className="feature__card__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque molestiae error assumenda hic repudiandae?
                    Commodi sint animi, est officiis, hic distinctio ex totam
                    saepe voluptatum dolorum corrupti in reiciendis voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="card card__4">
                <img src={feat4} className="card__img" alt="features 4" />
                <div className="card__content">
                  <h1 className="feature__card__heading u-margin-bottom-small">
                    Truly Digital
                  </h1>
                  <p className="feature__card__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque molestiae error assumenda hic repudiandae?
                    Commodi sint animi, est officiis, hic distinctio ex totam
                    saepe voluptatum dolorum corrupti in reiciendis voluptas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="card card__5">
                <img src={feat5} className="card__img" alt="features 5" />
                <div className="card__content">
                  <h1 className="feature__card__heading u-margin-bottom-small">
                    Trade and grow
                  </h1>
                  <p className="feature__card__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque molestiae error assumenda hic repudiandae?
                    Commodi sint animi, est officiis, hic distinctio ex totam
                    saepe voluptatum dolorum corrupti in reiciendis voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;