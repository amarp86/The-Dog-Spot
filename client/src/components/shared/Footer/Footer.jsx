import "./Footer.css";
import linkedin from "../../../images/linkedin-3-24.png";

function Footer(props) {
  return (
    <div className="footer-area">
      <div className="contributors">
        <div className="hanna">
          <a  href="https://www.linkedin.com/in/hanna-boorom/" target="_blank">
            Hanna Boorom
            <img className="linkedin-image" src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="jason">
          <a  href="https://www.linkedin.com/in/jason-quizhpi-30a41b169/" target="_blank">
            Jason Quizhpi
            <img className="linkedin-image" src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="amar">
          <a   href="https://www.linkedin.com/in/amarp86/" target="_blank">
            Amar Patel
            <img className="linkedin-image" src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
