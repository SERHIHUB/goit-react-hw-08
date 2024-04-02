import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Contacts.module.css";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => toast.error("Sorry, try again later."));
  }, [dispatch]);

  return (
    <div>
      <h2>Your contacts</h2>
      {isLoggedIn && (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Contacts;
