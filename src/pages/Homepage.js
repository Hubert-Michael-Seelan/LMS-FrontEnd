import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mt-5">
        <div class="col-9 col-sm-8 col-lg-6">
          <img
            src="https://shorturl.at/mqRV7"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="600"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
