import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home">
      <div className="home container d-flex">
        <Social />
        <Data />
      </div>
    </section>
  );
};

export default Home;
