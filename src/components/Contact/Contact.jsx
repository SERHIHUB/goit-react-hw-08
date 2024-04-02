import { useDispatch, useSelector } from "react-redux";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const [editContact, setEditContact] = useState(false);

  const closeModal = () => {
    setEditContact(false);
  };

  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>
          <FaUserLarge className={css.icon} />
          {name}
        </p>
        <FaPhone className={css.icon} />
        <a href={`tel:${number}`}>{number}</a>
      </div>

      <button
        className={css.button}
        onClick={() => setEditContact(true)}
        type="button"
      >
        Delete
      </button>
      {editContact && (
        <ContactModal
          id={id}
          name={name}
          isOpen={editContact}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Contact;
