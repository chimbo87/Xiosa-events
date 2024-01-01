import React from "react";
import "./OurWork.css";

function OurWork() {
  return (
    <>
      <div className="container-fluid" id="ourWorkPage">
        <h2>Our Work</h2>
      </div>
      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          <div>
            <button>All</button>
          </div>
          <div>
            <button>Graduations</button>
          </div>

          <div>
            <button>Birth Days</button>
          </div>

          <div>
            <button>Weddings</button>
          </div>

          <div>
            <button>Conferences</button>
          </div>

          <div>
            <button>Rooro Day</button>
          </div>

          <div>
            <button>Catering</button>
          </div>
        </div>
      </div>
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
