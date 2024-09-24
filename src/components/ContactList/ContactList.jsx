import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredData.length > 0 && filteredData.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
