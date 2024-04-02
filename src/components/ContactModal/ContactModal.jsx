import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactModal.module.css";
import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

const ContactModal = ({ id, name, isOpen, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className={css.container}>
        <p>do you really want to delete {name}?</p>
        <div className={css.buttons}>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
          <button className={css.closeBtn} onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
