import ModalCom from "@/components/Modal";
import Particle from "@/components/Particle";
import ProjectCards from "@/components/ProjectCards";
import Testimonial from "@/components/Testimonial";
import { addTestimonial, editTestimonial } from "@/features/testimonialSlice";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaAd, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Testimonials() {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    job: "",
    text: "",
  });
  console.log(
    "🚀 ~ file: testimonials.js:21 ~ Testimonials ~ formData:",
    formData
  );

  const testimonials = useSelector((state) => state.testimonials.testimonials);
  const dispatch = useDispatch();
  const { name, job, text } = formData;
  const HandleEdit = (t) => {
    setIsEdit(true);

    setShow(true);
    setFormData(t);
  };
  const handleClose = () => {
    setShow(false);
    setFormData({
      name: "",
      job: "",
      text: "",
    });
    setError("");
    setShow(false);
    setIsEdit(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (name?.trim() === "" || job?.trim() === "" || text?.trim() === "") {
      setError("Please fill all the fields.");
      return;
    }
    console.log(text?.trim());
    const newTestimonial = {
      id: formData.id ? formData.id : Date.now(),
      name: formData.name,
      job: formData.job,
      text: formData.text,
    };
    //dispatch(addTestimonial(newTestimonial));
    isEdit
      ? dispatch(editTestimonial(newTestimonial))
      : dispatch(addTestimonial(newTestimonial));
    handleClose();
  };

  return (
    <div className="project-section">
      <div className=" testimonial-heading">
        <h1 className="project-heading">Testimonials</h1>
        <Button
          variant="primary"
          style={{ marginLeft: "10px" }}
          onClick={handleShow}
        >
          <FaEdit style={{ marginRight: "5px" }} />
          Add Testimonial
        </Button>
      </div>
      <section className="home-testimonial container-fluid">
        <div className="testimonial-list">
          {testimonials.map((t) => (
            <Testimonial key={t.id} t={t} HandleEdit={HandleEdit} />
          ))}
        </div>
      </section>
      <ModalCom
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default Testimonials;
