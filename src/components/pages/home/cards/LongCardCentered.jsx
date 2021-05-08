import React from "react";

function LongCardCentered({ title, body, link, image }) {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">{title}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{body}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            {link}
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div className="container px-5">
          <img
            src={image}
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt=""
            width="700"
            height="300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default LongCardCentered;
