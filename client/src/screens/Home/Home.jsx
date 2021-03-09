import Layout from "../../components/shared/Layout/Layout";

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className="home-area">home is here</div>
    </Layout>
  );
}

export default Home;
