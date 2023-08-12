import "../css/footer.scss";

import icoAdress from "../assets/icons/address.svg";
import icoMail from "../assets/icons/mail.svg";
import icoPhone from "../assets/icons/phone.svg";

import icoFacebook from "../assets/icons/facebook.svg";
import icoInstagram from "../assets/icons/instagram.svg";
import icoTwiter from "../assets/icons/twiter.svg";
import icoTiktok from "../assets/icons/tiktok.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h4 className="logo">LOGO</h4>
        <span>Somos expertos en morfología, visagismo y técnicas de micropigmentación capilar</span>
        
        <div className="row addres">
          <div className="col">
            <img src={ icoAdress } alt="" loading="lazy" />
            <span>Jr. Prolongación mariano otero 261 VILLA DE SOL 1 interior 09 zona sur Nueva York.</span>
          </div>
          <div className="col">
            <img src={ icoMail } alt="" loading="lazy" />
            <span>micropigmentacion@gmail.com</span>
          </div>
          <div className="col">
            <img src={ icoPhone } alt="" loading="lazy" />
            <span>+51 984 455 235</span>
          </div>
        </div>

        <div>
          <span>Síguenos en nuestras redes sociales</span>
          <div className="social">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ icoFacebook } alt="" loading="lazy" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ icoInstagram } alt="" loading="lazy" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ icoTwiter } alt="" loading="lazy" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={ icoTiktok } alt="" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer