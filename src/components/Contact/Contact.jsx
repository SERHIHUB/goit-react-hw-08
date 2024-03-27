import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
