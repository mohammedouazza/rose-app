import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import ListContact from "./ListContact";

function Contact() {
  const isLoggedIn = useSelector((state) => state.admin.loggedIn);

  return (
    <Container>{isLoggedIn ? <ListContact /> : <ContactForm />}</Container>
  );
}

export default Contact;
