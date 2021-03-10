import Carousel from "../../components/Carousel/Carousel";

function Home(props) {
  return (
    <div className="home-area">
      <div className="home-banner-image">
        Doge Coin Image Here
        <img
          src="https://images.unsplash.com/photo-1601758176175-45914394491c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="banner"
        />
      </div>

      <div className="carousel">
        <Carousel />
      </div>

      <div className="make-a-difference">Linky Links and Pictographs</div>
    </div>
  );
}

export default Home;
