import React from "react";
import Vmc from "./Vmc";

function About() {
  return (
    <div>
      <section className="section py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto"></div>
            <h3>About Us</h3>
          </div>
          <div className="col-md-8 my-auto">
            {/* <h6 className="float-end">Home/About Us</h6> */}
          </div>
        </div>
      </section>
      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            saepe, qui ipsa nesciunt cum dolor delectus deleniti perspiciatis
            maiores sapiente excepturi doloribus, praesentium architecto sed ad
            esse nam tempora culpa.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nisi saepe, qui ipsa nesciunt cum dolor delectus
            deleniti perspiciatis maiores sapiente excepturi doloribus,
            praesentium architecto sed ad esse nam tempora culpa.
          </p>
        </div>
      </section>
      <Vmc />
    </div>
  );
}

export default About;
