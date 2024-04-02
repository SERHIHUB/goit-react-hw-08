import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
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
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordFieldId}
        />

        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
