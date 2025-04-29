import "./Banner.css";
import bannerImage from "../../../assets/banner-image.png";

const Banner = () => {
  return (
    <>
      <section id="main_banner_body">
        <div className="main_banner_container">
          <div className="banner_left_site_container">
            <h1>
              Your Partner in <br />
              Health and Wellness
            </h1>
            <p>
              We are committed to providing you with the best medical and <br />
              healthcare services to help you live healthier and happier.
            </p>
          </div>

          <div className="banner_right_site_container">
            <img src={bannerImage} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;