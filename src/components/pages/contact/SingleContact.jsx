import React from "react";
import { Card } from "react-bootstrap";

function SingleContact(props) {
  const { email, subject, message, createdAt } = props.contact;

  const formatDate = (time) => {
    const date = new Date(time);
    let day = date.getDate();
    day = day > 9 ? day : "0" + day;
    let month = date.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  return (
    <Card className="mb-2">
      <Card.Header>
        Message de <strong>{email}</strong>
        {createdAt && (
          <span style={{ fontStyle: "italic" }}> {formatDate(createdAt)}</span>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title>Object : {subject}</Card.Title>
        <Card.Text>{message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleContact;
