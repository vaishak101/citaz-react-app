import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-center-text u-margin-bottom-big">
        <a href="#">
          <img src="img/logo/logo.png" className="footer__logo" alt="CITAZ BANK Logo" /></a>
        <a className="footer__img-name u-margin-top-small">CITAZ BANK LTD</a>
      </div>
      <div className="footer__link-box u-margin-bottom-medium">
        <ul className="footer__ul">
          <li className="footer__li">
            <a href="#" className="footer__link">Support</a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__link">Careers</a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__link">Contact Us</a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__link">Our Team</a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__link">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer__text-box">
        <p className="footer__para">
          Built by
          <a href="https://vaishak101.netlify.app/" className="footer__link footer__link--name" target="_blank">
            Vaishak Nair </a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer;