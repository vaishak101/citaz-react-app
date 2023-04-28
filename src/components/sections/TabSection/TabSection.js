import "./TabSection.css"

function TabSection() {
  return (
    <section className="operations section" id="operations">
      <div className="container">
        <div className="features__text-box">
          <h1 className="heading-primary">
            Citaz Operates Flexibly for your best experience
          </h1>
          <p className="heading-secondary">Operations</p>
        </div>
        <div className="operations__container">
          <div className="operations__container--btn">
            <button className="operations__btn operations__btn--1 op--active" data-btn="1">
              Online Banking</button><button className="operations__btn operations__btn--2" data-btn="2">
              Mobile Banking</button><button className="operations__btn operations__btn--3" data-btn="3">
              24x7 Support
            </button>
          </div>
          <div className="tab tab__1 tab__active">
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
          <div className="tab tab__2">
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
          <div className="tab tab__3">
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
    </section>
  )
}

export default TabSection;