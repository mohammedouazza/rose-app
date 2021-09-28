import React from "react";
import ContactForm from "../../contact/ContactForm";

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
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default LongCardForm;
