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
    <table>
      <thead>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>City</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </thead>
      <tbody>
        {contact && ( // Check if contact is not null
        <tr>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
          <td>{contact.email}</td>
          <td>{contact.address.city}</td>
          <td>{contact.phone}</td>
          <td>{contact.website}</td>
          <td>{contact.company.name}</td>
        </tr>
        )}
      </tbody>
    </table>
  );
}
