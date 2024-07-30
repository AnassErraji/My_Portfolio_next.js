import React from "react";
import { Button } from "react-bootstrap";

function Testimonial({ t, HandleEdit }) {
  return (
    <div className="col-md-3 style-3">
      <div className="tour-item ">
        <div className="tour-desc bg-white">
          <div className="tour-text color-grey-3 text-center">{t.text}</div>
          <div className="d-flex justify-content-center pt-2 pb-2">
            <img className="tm-people" src="/avatar2.svg" alt="" />
          </div>
          <div className="link-name h2 d-flex justify-content-center">
            {t.name}
          </div>
          <div className="link-position d-flex justify-content-center">
            {t.job}
          </div>
          <Button
            onClick={() => HandleEdit(t)}
            variant="primary"
            className="mt-3"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
