import React from "react";

import iklan1 from "../assets/iklan1.mp4";

function CarouselPage() {
  return (
    <div>
      <video
        className="d-block w-100"
        autoPlay
        loop
        muted
        style={{ objectFit: "fill", maxHeight: "100vh" }}
      >
        <source src={iklan1} type="video/mp4" />
      </video>
    </div>
  );
}

export default CarouselPage;
