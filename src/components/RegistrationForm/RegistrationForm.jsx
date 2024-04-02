import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Username
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />

        <label className={css.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailFieldId}
        />

        <label className={css.label} htmlFor={passwordFieldId}>
          password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
