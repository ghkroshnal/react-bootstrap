import React from "react";
import "../../Assests/css/bootstrap.min.css";
import "../../Assests/css/style.css";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container contact-page py-5">
          <div className="row py-5 justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h1>Contact Us</h1>
                <h2 className="mb-4">
                  If you require further information, please reach out to us.
                </h2>
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label"></label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="col-md-12">
                      <label htmlFor="subject" className="form-label"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="col-md-12">
                      <label htmlFor="message" className="form-label"></label>
                      <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
