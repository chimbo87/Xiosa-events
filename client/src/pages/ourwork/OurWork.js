import React, { useState } from "react";
import "./OurWork.css";
import Banner01 from "../../assets/xiosa01.jpeg";
import Banner02 from "../../assets/banner02.jpg";
import Banner03 from "../../assets/xiosa03.jpeg";
import Banner04 from "../../assets/xiosa04.jpeg";
import Footer from "../../components/footer/Footer";

function OurWork() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="container-fluid" id="ourWorkPage">
        <h2>Our Work</h2>
      </div>
      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          <div>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Graduations
            </button>
          </div>

          <div>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Birth Days
            </button>
          </div>

          <div>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Weddings
            </button>
          </div>

          <div>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Conferences
            </button>
          </div>

          <div>
            <button
              className={activeButton === 6 ? "active" : ""}
              onClick={() => handleButtonClick(6)}
            >
              Rooro Day
            </button>
          </div>

          <div>
            <button
              className={activeButton === 7 ? "active" : ""}
              onClick={() => handleButtonClick(7)}
            >
              Catering
            </button>
          </div>
        </div>
        <div id="workCards">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner02} />
                <h4>Rooro Day</h4>
                <p>
                  Wedding, Glen View ~ <i>23 Aug 2018</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner03} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day ~<i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner01} />
                <h4>Rooro Day</h4>
                <p>
                  Old Mutual Conference ~ <i>20 July 2020</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner02} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner02} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner04} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner03} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner02} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner04} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner03} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="workCardsWrap">
                <img src={Banner01} />
                <h4>Rooro Day</h4>
                <p>
                  Budiriro Rooro day <i>23 Aug 2023</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ourWorkNextBtn">
        <button>See More</button>
      </div>
      <Footer />
    </>
    // <div id="ourWorkPage">

    //   <div id="aaa">
    //   <h1>
    //     Lorem Ipsum is simply dummy text of the printing and typesetting
    //     industry. Lorem Ipsum has
    //   </h1>
    //   <button>Our Work</button>
    //   </div>
    //   <div class="triangle"></div>
    // </div>
  );
}

export default OurWork;
