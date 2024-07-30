import { addTestimonial } from "@/features/testimonialSlice";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

function ModalCom({
  show,
  handleClose,
  handleSubmit,
  errors,
  formData,
  error,
  setFormData,
}) {
  const { name, job, text } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: Modal.jsx:16 ~ error:", error);
    handleSubmit();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tistimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="page-content page-container" id="page-content">
            <div className="row container d-flex justify-content-center">
              <form className="card">
                <div className="card-body">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      value={name}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      name="job"
                      type="text"
                      placeholder="Job"
                      value={job}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="text"
                      value={text}
                      rows="6"
                      placeholder="Your Review"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            {error && <p className="text-danger">{error}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCom;
