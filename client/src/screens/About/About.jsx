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
          California and currently expanding to new heights. Our
          organization was found by three individuals, Amar, Hanna, and Jason
          whose beliefs are that shelter dogs deserve a second chance and be place in
          loving homes. We team up with other local shelter organizations promoting their adopting dogs and through
          programs with animal placement organizations. We are currently trying to reach out to more shelters throughout the United States. Our facility responds to
          calls from the public to help keep our community safe and rescue
          animals in need rescued. We have succesfully maintain a strong presence and
          have proudly gained over a million supporters. We want these dogs to get a second chance in
          happiness again.
        </p>
      </div>

      <Container />
    </div>
  );
}

export default About;
