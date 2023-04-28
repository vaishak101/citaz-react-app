import Hero from "./sections/Hero/Hero.js";
import Feature from "./sections/feature/Feature.js";
import TabSection from "./sections/TabSection/TabSection.js";
import Testimonial from "./sections/Testimonial/Testimonial.js";
import Footer from "./common/Footer/Footer.js";

function Layout() {
  return (
    <>
      <Hero />
      <Feature />
      <TabSection />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Layout;