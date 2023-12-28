import React from "react";
import "./About.css";
import Banner01 from "../../assets/banner01.jpg";
import Banner02 from "../../assets/banner02.jpg";
import Banner03 from "../../assets/banner03.jpg";
import Banner04 from "../../assets/banner04.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function About() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewAboutCard">
      <img src={Banner01} onDragStart={handleDragStart} role="presentation" />

      <p>
        <span>
          <i class="bx bxs-quote-left"></i>
        </span>{" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <span>
          <i class="bx bxs-quote-right"></i>
        </span>
      </p>
      <small>
        ~<i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner03} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner04} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner01} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner04} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner03} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewAboutCard">
      <img src={Banner02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,

    <div id="reviewAboutCard">
      <img src={Banner02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div id="theAboutPage">
        <h2>About Us</h2>
      </div>
      <div className="container" id="aboutBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="aboutCard">
              <h4>Who Are We ?</h4>
              <p>
                {" "}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="aboutCard">
              <img src={Banner03} />
            </div>
          </div>
        </div>
        <div id="aboutTeam">
          <h4>
            Meet our <i>XIOSA</i> team
          </h4>
          <div id="aboutTeamPhoto">
            <img src={Banner03} />
          </div>
        </div>
        <div id="aboutVision">
          <div class="row">
            <div class="col-lg-6 col-md-4">
              <div id="aboutVisionCard">
                <h4>Our Vision</h4>
                <p>
                  <i class="bx bxs-quote-left"></i> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,{" "}
                  <i class="bx bxs-quote-right"></i>
                </p>
                <small>
                  <i>J. Marangwanda ~2015</i>
                </small>
              </div>
            </div>
            <div class="col-lg-6 col-md-4">
              <div id="aboutVisionCard">
                <img src={Banner04} />
              </div>
            </div>
          </div>
        </div>
        <div id="reviewsAbout">
          <h4>What Our Clients Say</h4>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
            // animationType="fadeout"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
