"use client";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Contact = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, email, lastName, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
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

    // Set success message
    setSuccess("Thanks for contacting us. We will send you an email soon.");
  };

  return (
    <section
      className="mb-4 mt-10 contact-section container text-white"
      id="contact"
      style={{ marginTop: "190px" }}
    >
      <h2 className="h1-responsive font-weight-bold text-center text-uppercase mb-4 my-4">
        Contacter moi
      </h2>

      <div className="col-md-6 mx-auto" id="page-content">
        {success && <p className="text-success text-center">{success}</p>}
        <div className="row container d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <input
                  className="form-control"
                  name="firstName"
                  type="text"
                  placeholder="Prénom"
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
                  placeholder="Nom"
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
                  placeholder="Email"
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
                  placeholder="Votre message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <Button type="submit" variant="primary">
              Envoiez le message
            </Button>
          </form>
        </div>
        {error && <p className="text-danger text-center">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;

