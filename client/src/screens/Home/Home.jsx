import Carousel from "../../components/Carousel/Carousel";
import "./Home.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faDonate} from '@fortawesome/free-solid-svg-icons'

function Home(props) {
  const element = <FontAwesomeIcon icon={faDog} size="6x" />
  const donate = <FontAwesomeIcon icon={faDonate}  size="6x" />
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

      <div className="make-a-difference">
        <img className="banner-two" alt="baner"src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg"/>
        <div className="title">You can make a difference</div>
        
        <div className="home-links">
          <div className="container-link">
          <Link  to="/dogs">
         
            <div className="adopt">Adopt</div>
            
            <div className="dog-icon">{element}</div>
            </Link ></div>
          <div className="container-link">
          <Link to="/donate">
          
          <div className="adopt"> Donate</div>  
              
          <div className="donate-icon">{donate}</div>
            </Link>
            </div>
        </div>
         
      </div>
    </div>
  );
}

export default Home;
