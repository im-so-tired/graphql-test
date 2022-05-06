import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { getUsers } from "../Graphql/query/user";
import { addUser } from "../Graphql/mutation/user";
import * as yup from "yup";
import { MyTextField } from "../Components/TextField";
import { ModalRegisterSuccess } from "../Components/ModalRegisterSuccess";
interface formValue {
  email: string;
  phone: string;
  password: string;
}

export const Authorization: React.FC = () => {
  let { data, error, loading } = useQuery(getUsers);
  let [newUser] = useMutation(addUser);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const validate = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Is required"),
    phone: yup
      .string()
      .max(11, "Must be 11 characters")
      .min(11, "Must be 11 characters")
      .required("Is required"),
    password: yup
      .string()
      .min(6, "Must be 6 characters or more")
      .required("Is required"),
  });
  return (
    <div className="Authorization">
      <ModalRegisterSuccess></ModalRegisterSuccess>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={(
            values: formValue,
            { setSubmitting }: FormikHelpers<formValue>
          ) => {
            const modal = document.querySelector(".register-success");
            modal?.classList.remove("hidden");
            newUser({
              variables: {
                email: values.email,
                phone: values.phone,
                password: values.password,
              },
            })
              .then(({ data }) => console.log(data))
              .catch((e) => console.log(e));
          }}
          validationSchema={validate}
        >
          {(props: FormikProps<formValue>) => (
            <Form className="author-form">
              <h1>Sign Up</h1>
              <MyTextField
                label="Email"
                name="email"
                type="email"
                autoComplete="off"
              ></MyTextField>
              <MyTextField
                label="Phone"
                name="phone"
                type="text"
                autoComplete="off"
                pattern="^[ 0-9]+$"
                title="Используйте числовой формат"
              ></MyTextField>
              <MyTextField
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
              ></MyTextField>
              <button onSubmit={(e) => e.preventDefault()} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className="haveAuthor">
          Already have an account?
          <Link to="/entry">
            <span>Log in to your account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
