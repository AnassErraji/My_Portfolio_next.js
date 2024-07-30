"use client";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Contact = () => {
  const [error, setError] = useState();
  const [nameerror, setnameError] = useState();
  const [emailerror, setemailError] = useState();
  const [phoneerror, setphoneError] = useState();
  const [messageerror, setmessageError] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, email, lastName, message } = formData;
  //console.log(name);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  validation
    if (
      firstName.trim() === "" ||
      email.trim() === "" ||
      lastName.trim() === "" ||
      message.trim() === ""
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    setError();

    // Log the form request to the console
    console.log(formData);

    // Clear the form inputs
    setFormData({
      firstName: "",
      email: "",
      lastName: "",
      message: "",
    });
    alert("thanks for contacting us we will send you email soon");
  };

  return (
    <section
      className="mb-4 mt-10 contact-section container text-white"
      id="contact"
      style={{ marginTop: "190px" }}
    >
      <h2 className="h1-responsive font-weight-bold text-center text-uppercase mb-4 my-4">
        Contact us
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        We&apos;re here to help and answer any question you might have. We look
        forward to hearing from you
      </p>

      <div className="col-md-6 mx-auto" id="page-content">
        <div className="row container d-flex justify-content-center">
          <form className="">
            <div className="card-body">
              <div className="form-group">
                <input
                  className="form-control"
                  name="firstName"
                  type="text"
                  placeholder="firstName"
                  onChange={handleChange}
                  value={firstName}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  name="lastName"
                  type="text"
                  placeholder="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  value={message}
                  rows="6"
                  placeholder="Your message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <Button variant="primary" onClick={handleSubmit}>
              Send Message
            </Button>
          </form>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
