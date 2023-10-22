import hello from "../../assets/hand.svg";
import "./home.css";

const Data = () => {
  return (
    <section className="data d-flex row">
      <div className="col-7">
        <h1 className="title">
          Kelvin Brian
          <img src={hello} alt="My Pic" className="img-fluid" />
        </h1>
        <h3 className="subtitle">Software Engineer</h3>
        <p className="description custom-description">
          A dedicated software engineer, passionate about crafting innovative
          solutions to complex problems.
        </p>
        <button type="button" class="btn btn-dark mt-4 p-1 socials">
          <a href="#contact" className="button">
            Say Hello <i className="uil p-1 uil-message nav__icon"></i>
          </a>
        </button>
      </div>
      <div className="profile col-5"></div>
    </section>
  );
};

export default Data;
