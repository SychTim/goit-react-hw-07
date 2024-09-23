import { IoMdContact } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.card}>
      <div>
        <p>
          <IoMdContact className={css.icon} />
          {contact.name}
        </p>
        <p>
          <MdPhoneEnabled className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
