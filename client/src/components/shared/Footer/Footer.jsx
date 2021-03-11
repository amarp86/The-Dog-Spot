import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer-area">
      <div className="contributors">
        <div className="hanna">
          <a href="https://www.linkedin.com/in/hanna-boorom/">
            Hanna Boorom
            <img
              className="linkedin-image"
              src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615482816~hmac=5b2dbec5d95d006134bc6aef63646883"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="jason">
          <a href="https://www.linkedin.com/in/jason-quizhpi-30a41b169/">
            Jason Quizhpi
            <img
              className="linkedin-image"
              src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615482816~hmac=5b2dbec5d95d006134bc6aef63646883"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="amar">
          <a href="https://www.linkedin.com/in/amarp86/">
            Amar Patel
            <img
              className="linkedin-image"
              src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615482816~hmac=5b2dbec5d95d006134bc6aef63646883"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
