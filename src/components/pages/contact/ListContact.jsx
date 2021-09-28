import React, { useEffect, useState } from "react";
import SingleContact from "./SingleContact";
import { getContacts } from "../../../back-end/contact";

function ListContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((newContacts) => {
      if (!contacts.length)
        setContacts(
          newContacts.sort((date1, date2) => {
            if (date1.createdAt > date2.createdAt) return -1;
            if (date1.createdAt < date2.createdAt) return 1;
            return 0;
          })
        );
    });
  });
  return (
    <>
      <h1 className="p-4">Les messages envoyés</h1>
      <div>
        {!contacts.length && <h3>Pas de message pour le moment.</h3>}
        {contacts.map((contact, idx) => (
          <SingleContact key={idx} contact={contact} />
        ))}
      </div>
    </>
  );
}

export default ListContact;
