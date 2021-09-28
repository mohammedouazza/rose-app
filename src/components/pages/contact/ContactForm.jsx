import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { sendContact } from "../../../back-end/contact";

function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    setLoading(true);
    const infos = {
      email: e.target[0].value,
      subject: e.target[1].value,
      message: e.target[2].value,
    };

    if (!infos.email || !infos.subject || !infos.message) {
      setError("Tous les champs doivent être remplis!");
      setLoading(false);
      return;
    } else {
      setError("");
    }
    sendContact(infos).then((resp) => {
      setSuccess("Votre message a été envoyé avec succès!");
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setLoading(false);
    });
  };

  return (
    <>
      <h1 className="p-4">Contactez nous</h1>

      <Form
        onSubmit={(e) => handleSubmit(e)}
        className="p-4 p-md-5 border rounded-3 bg-light mb-5"
      >
        {loading && (
          <Spinner animation="border" role="status" className="rose-spinner" />
        )}
        {error && (
          <Alert variant="danger">
            <p>{error}</p>
          </Alert>
        )}
        {success && (
          <Alert variant="success">
            <p>{success}</p>
          </Alert>
        )}
        <Form.Group className="mb-2">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Objet</Form.Label>
          <Form.Control type="text" placeholder="Objet" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit" className="send-button">
          Envoyer
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
