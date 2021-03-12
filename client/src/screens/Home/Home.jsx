import Carousel from "../../components/Carousel/Carousel";
import "./Home.css"

import Container from "../../components/shared/Container/Container";

function Home(props) {
 
  return (
    <div className="home-area">
      <div className="home-banner-image">
      
        <img className="banner"
          src="https://images.unsplash.com/photo-1601758176175-45914394491c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="banner"
        />
        <div className="headliner">Every Dog Deserves a Home.</div> 
    
      </div>
      <div className="brand-statement">
        <div className="statement">The Dog Spot is an online organization based in San Diego, California where we help animal shelters from the USA adopt their dog. Feel free to check out the available dogs or add a dog ready to be adopted to our site.</div>
      </div>
      <div className="carousel">
       <div className="adopted">Adopted Dogs</div> 
        <Carousel />
      </div>
       <Container/>
      </div>
    
  );
}

export default Home;
