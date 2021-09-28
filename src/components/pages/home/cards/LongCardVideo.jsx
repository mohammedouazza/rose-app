import React from "react";
import FlowerVideo from "../../../../videos/flower.mp4";

function LongCardVideo({ title, body, link }) {
  const videoWidth = window.outerWidth < 700 ? window.outerWidth - 50 : 700;
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <video width={videoWidth} controls>
            <source src={FlowerVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{body}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 send-button"
            >
              {link}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LongCardVideo;
