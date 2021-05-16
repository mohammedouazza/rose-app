import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <h1 className="p-4">Contactez nous</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="S'abonner au news letter" />
        </Form.Group>
        <Button variant="default" type="submit" className="send-button">
          Envoyer
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;