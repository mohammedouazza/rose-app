import React from "react";

function LongCardShadow({ title, body, link, image }) {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">{title}</h1>
            <p className="lead">{body}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                {link}
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 position-relative overflow-hidden shadow-lg">
            <div className="position-lg-absolute top-0 left-0 overflow-hidden">
              <img
                className="d-block rounded-lg-3"
                src={image}
                alt=""
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LongCardShadow;
