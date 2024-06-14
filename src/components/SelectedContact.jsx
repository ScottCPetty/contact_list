import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        console.log(data);
        setContact(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <>
      {contact && ( // Check if contact is not null
        <div>
          <h1>{contact.name}</h1>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>City: {contact.address.city}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>Company: {contact.company.name}</p>
        </div>
      )}
    </>
  );
}
