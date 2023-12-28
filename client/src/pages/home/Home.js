import React from "react";
import "./Home.css";
import Banner01 from "../../assets/banner01.jpg";
import Banner02 from "../../assets/banner02.jpg";
import Banner03 from "../../assets/banner03.jpg";
import Banner04 from "../../assets/banner04.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>Transforming Events, Creating Memories</h1>
        <p>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more Transforming moments into
          cherished memories with exquisite event designs for weddings,
          conferences, and more
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Transforming Events, Creating Memories</h1>
        <p>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more Transforming moments into
          cherished memories with exquisite event designs for weddings,
          conferences, and more
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Celebrate Moments, Elevate Spaces.</h1>
        <p>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more Transforming moments into
          cherished memories with exquisite event designs for weddings,
          conferences, and more
        </p>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard03">
      <div id="reviewCardInner">
        <h1>Celebrate Moments, Elevate Spaces.</h1>
        <button>Our Work</button>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
      </div>
      <div className="container" id="homePage">
        <div class="row" id="homePageBox">
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-map"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  150 Mars Street<br></br> Harare, Zimbabwe
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-calendar"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  Mon ~ Sunday<br></br>Open Holidays
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-phone"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  +263 771 234 5678<br></br>+263 771 234 5678<br></br>
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homeAddressCard" class="homeAddressCard">
              <div id="homeAddressCardIcon">
                <i class="bx bx-envelope"></i>
              </div>
              <div id="homeAddressCardText">
                <small>
                  xiosa@gmail.com<br></br> xiosa@gmail.com<br></br>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div id="homeMessage">
          <h4>Celebrate Moments, Elevate Spaces.</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div id="homePhotos">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner01} />
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner03} />
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner02} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner01} />
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner03} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner02} />
              </div>
            </div>
            <div class="col-lg-6 col-md-4">
              <div id="homePhotoCard">
                <img src={Banner04} />
              </div>
            </div>
          </div>
        </div>
        <div id="offer">
          <h4>Why Choose Us ?</h4>
          <div class="row">
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>10+</h4>
                <h5>Experience</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>1000+</h4>
                <h5>Completed Projects</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>300+</h4>
                <h5>Happy Clients</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-4" id="offerCardBox">
              <div id="offerCard">
                <h4>10+</h4>
                <h5>Experience</h5>
              </div>
            </div>
          </div>
          <div id="newsLetter">
            <h4>Please Subscribe To Our NewsLetter</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
            <div id="newsLetterInput">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div id="homeContact">
          {/* <h4>Get InTouch With Us</h4> */}
          <div class="row">
            <div class="col-lg-8 col-md-4">
              {" "}
              <form class="row g-3" id="homeContactForm">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Surname
                  </label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Email
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Phone Number
                  </label>
                  <input type="number" class="form-control" id="inputAddress" />
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="homeContactCard">
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-map"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      150 Mars Street<br></br>Harare, Zimbabwe
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-calendar"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      Mon ~ Sunday<br></br>Open Holidays
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-phone"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      +263 773 123 3456<br></br>+263 773 123 3456
                    </p>
                  </div>
                </div>
                <div id="homeContactCardInfor">
                  <div id="homeContactCardIcon">
                    <i class="bx bx-envelope"></i>
                  </div>
                  <div id="homeContactCardIText">
                    <p>
                      xiosa@info.com<br></br>xiosa@gmail.com
                    </p>
                  </div>
                </div>
                <div id="homeContactSocialLink">
                  <i class="bx bxl-facebook"></i>
                  <i class="bx bxl-instagram"></i>
                  <i class="bx bxl-whatsapp"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
