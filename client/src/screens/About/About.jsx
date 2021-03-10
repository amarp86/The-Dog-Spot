
function About(props) {
  return (
    <div>
      <div className="about-banner-image">
        
        <img
          src="http://www.aspca.org/sites/default/files/nyc-adoption-center-facebook.jpg"
          alt="banner"
        />
         <h1>Who We Are.</h1>
      </div>
      <div className="about-us">
        The Dog Spot is and not-for-profit organization based in New Jersey and currently expanding its company to new heights. Our organization was found by three individuals, Amar, Hanna, and Jason whose beliefs are that shelter dogs deserve respect and be place in loving homes. We team up with other shelter organizations through programs that promote adopting shelter dogs and having them post their dogs on our site. We have succesfully maintain a strong presence and have proudly gained over 5 million supporters. We want these dogs to get a second chance in happiness again. 
        </div>
      <div className="container">
        You can make a difference:
         <img className="icon" alt="icon"/>
         <img className="icon" alt="icon"/>
      </div>

    </div>
  );
}

export default About;