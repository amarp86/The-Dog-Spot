import Container from "../../components/shared/Container/Container";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <div className="about-banner">
        <img
          className="banner-image"
          src="http://www.aspca.org/sites/default/files/nyc-adoption-center-facebook.jpg"
          alt="banner"
        />
        <h1>Who We Are.</h1>
      </div>

      <div className="about-us">
        <p>
          The Dog Spot is and not-for-profit organization based in San Diego,
          California and currently expanding to new heights. Our organization
          was found by three individuals, Amar, Hanna, and Jason whose beliefs
          are that shelter dogs deserve a second chance and to help them be
          placed in loving homes. We team up with local shelter organizations
          promoting their adoptable dogs and through programs with animal
          placement organizations. We are currently trying to reach out to more
          shelters throughout the United States. Our facility responds to calls
          from the public to help keep animals in need of rescue safe. We have
          successfully maintained a strong presence in the animal world, all
          while proudly gaining over one million supporters. We want these dogs
          to get a second chance in lifelong happiness.
        </p>
      </div>

      <Container />
    </div>
  );
}

export default About;
