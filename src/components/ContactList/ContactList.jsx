import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      <ul className={css.contactList}>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
