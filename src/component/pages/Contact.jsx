import React from "react";

function Contact() {
  return (
    <div>
      <section className="section py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto"></div>
            <h3>Contact Us</h3>
          </div>
          <div className="col-md-8 my-auto">
            <h6 className="float-end">Home/Contact Us</h6>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group ">
                    <label className="mb-1">Message</label>
                    <textarea
                    rows="3"
                      type="text"
                      className="form-control"
                      placeholder="write Somthing..."
                    />
                    <div className="form-group py-3">
                      <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <h5 className="main-heading"> Contact Information
                  </h5>
                  <div className="underline"></div>
                  <p>Adress: xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                  <p>Phone : 9876543210</p>
                  <p>Gmail :  xxxxxxxxx@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
