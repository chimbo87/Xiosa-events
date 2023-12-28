import React from "react";
import "./Service.css";
import conferences from "../../assets/conf.png";
import weddings from "../../assets/wedding.png";
import birthdae from "../../assets/church (1).png";
import graduation from "../../assets/certfy.png";
import church from "../../assets/church (2).png";
import Catering from "../../assets/food.png";
import Footer from "../../components/footer/Footer";
function Service() {
  return (
    <>
      <div className="container-fluid" id="theServicePage">
        <h2>Our Services</h2>
      </div>
      <div className="container" id="theServicePageBox">
        <h4>What We Do</h4>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={conferences} />
              <h4>Conferences</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={weddings} />
              <h4>Weddings</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={birthdae} />
              <h4>Birth Days</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={graduation} />
              <h4>Graduations</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={church} />
              <h4>Church Gatherings</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="serviceCard">
              <img src={Catering} />
              <h4>Catering</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
        <div id="ourOffer">
          <h2>
            Crafting Elegance, <br></br>Illuminating Occasions,<br></br>{" "}
            Creating Memories<br></br>
            Welcome to Our Event Decor Wonderland!
          </h2>
          <button>Become A Client</button>
        </div>
        <div id="whyUs">
          <div class="row">
            <div class="col-lg-12 col-md-4">
              <div>
                <h4>We offer affordable and quality service</h4>
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
              </div>
            </div>
            <div class="col-lg-12 col-md-4">
              <div>
                <h4>We offer affordable and quality service</h4>
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
              </div>
            </div>
            <div class="col-lg-12 col-md-4">
              <div>
                <h4>We offer affordable and quality service</h4>
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
              </div>
            </div>
          </div>
        </div>

       

      </div>
      <Footer />
    </>
  );
}

export default Service;
