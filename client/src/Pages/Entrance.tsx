import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { getUsers } from "../Graphql/query/user";
import { addUser } from "../Graphql/mutation/user";
import * as yup from "yup";
import { MyTextField } from "../Components/TextField";
interface formValueEntry {
  email: string;
  password: string;
}
export const Entrance: React.FC = () => {
  let { data, error, loading } = useQuery(getUsers);
  let [newUser] = useMutation(addUser);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="Entrance">
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(
            values: formValueEntry,
            { setSubmitting }: FormikHelpers<formValueEntry>
          ) => {
            console.log(values);
            newUser({
              variables: {
                email: values.email,
                password: values.password,
              },
            })
              .then(({ data }) => console.log(data))
              .catch((e) => console.log(e));
          }}
        >
          {(props: FormikProps<formValueEntry>) => (
            <Form className="author-form">
              <h1>Entrance</h1>
              <MyTextField
                label="Email"
                name="email"
                type="email"
                autoComplete="off"
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
      </div>
    </div>
  );
};
