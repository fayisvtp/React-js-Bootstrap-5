import React from "react";
import Slider from "../assets/Slider";
import { Link } from "react-router-dom";
import Vmc from "./Vmc";

function Home() {
  return (
    <>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                nihil praesentium facere pariatur voluptates ea labore
                voluptatem aspernatur voluptate minus, quasi corporis sapiente,
                tempore dolore molestias minima, animi possimus porro.orem ipsum
                dolor sit amet, consectetur adipisicing elit. Ut nihil
                praesentium facere pariatur voluptates ea labore voluptatem
                aspernatur voluptate minus, quasi corporis sapiente, tempore
                dolore molestias minima, animi possimus porro.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                {" "}
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ********************* */}
      <Vmc />
      {/* ********************* */}

      {/* services
       ************* */}
      <section className="section bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center ">
              <h3 className="main-heading"> Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src="https://www.wallix.com/wp-content/uploads/2020/06/BMS-Bastion-Managed-Services-scaled.jpg"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Service 1</h5>
                  <div className="underline text-center "></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus earum veniam nostrum rem dolore aliquam amet
                    nobis deserunt fugiat officia quia, corporis molestiae
                    illum. Adipisci quibusdam excepturi cumque error natus?
                  </p>
                  <Link className="btn btn-danger w-2 " to="/service">
                    More...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src="https://www.wallix.com/wp-content/uploads/2020/06/BMS-Bastion-Managed-Services-scaled.jpg"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Service 2</h5>
                  <div className="underline "></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus earum veniam nostrum rem dolore aliquam amet
                    nobis deserunt fugiat officia quia, corporis molestiae
                    illum. Adipisci quibusdam excepturi cumque error natus?
                  </p>
                  <Link className="btn btn-danger w-2" to="/service">
                    More...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src="https://www.wallix.com/wp-content/uploads/2020/06/BMS-Bastion-Managed-Services-scaled.jpg"
                  alt="services"
                />
                <div className="card-body">
                  <h5>Service 3</h5>
                  <div className="underline "></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus earum veniam nostrum rem dolore aliquam amet
                    nobis deserunt fugiat officia quia, corporis molestiae
                    illum. Adipisci quibusdam excepturi cumque error natus?
                  </p>
                  <Link className="btn btn-danger w-2" to="/service">
                    More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
