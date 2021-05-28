import React from "react";

function LongCardForm() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Contactez nous</h1>
          <p className="col-lg-10 fs-4">
            Veuillez entrer votre email et votre message
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                rows="4"
              />
              <label htmlFor="floatingPassword">Message</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary send-button"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LongCardForm;
