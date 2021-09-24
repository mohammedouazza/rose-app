import { contactsRef } from "./firebaseDeps";

export const sendContact = async (infos) => {
  const contact = await contactsRef.add({
    ...infos,
    createdAt: new Date().getTime(),
  });
  //console.log(contact);
  return contact;
};

export const getContacts = async () => {
  const contacts = await contactsRef.get();
  let newContacts = [];
  contacts.forEach((doc) => {
    //console.log(doc);
    newContacts.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return newContacts;
};
