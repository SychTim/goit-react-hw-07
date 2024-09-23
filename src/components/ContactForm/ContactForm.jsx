import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(data, acts) {
    dispatch(
      addContact({ id: nanoid(), name: data.name, number: data.number })
    );

    acts.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" className={css.message} />
        </div>
        <div className={css.container}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={css.message}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
