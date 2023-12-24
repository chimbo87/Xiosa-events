import React from "react";
import "./Home.css";
// import Banner01 from "../../assets/banner01.jpg";
// import Banner02 from "../../assets/banner02.jpg";
// import Banner03 from "../../assets/banner03.jpg";
// import Banner04 from "../../assets/banner04.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more
        </h1>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more
        </h1>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>
          Transforming moments into cherished memories with exquisite event
          designs for weddings, conferences, and more
        </h1>
        <button>Our Work</button>
      </div>
    </div>,
    <div id="reviewCard03">
      <div id="reviewCardInner">
        <h1>
          World of timeless elegance, where we craft unforgettable moments for
          weddings, conferences, and more, turning dreams into enchanting
          realities
        </h1>
        <button>Our Work</button>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
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
  );
}

export default Home;
