import Button from "@material-tailwind/react/Button";
import Checkbox from "@material-tailwind/react/Checkbox";
import { Formik } from 'formik'
import React from "react";
import * as Yup from "yup";

import "@material-tailwind/react/tailwind.css";

import TextInput from "./TextInput";

export const LoginForm = () => {
  
  const _onSave = (values) => {
    console.log(values);
  };
  
  return (
    <>
    <Formik
      initialValues={{ email: "", password: "", checked: true }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Include at least one Uppercase, Lowercase, Number and a special character"
          )
      })}
      onSubmit={(values) => _onSave(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
              success={!errors.email && touched.email ? "Valid" : ""}
            />

            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
              success={!errors.password && touched.password ? "Valid" : ""}
            />

            <div className="mb-8 w-full">
              <Checkbox
                checked={values.checked}
                onChange={() => setFieldValue("checked", !values.checked)}
                color="lightBlue"
                text="Remember Me"
                id="checkbox"
              />
            </div>

            <div className="mb-8 w-full">
              <Button
                type="submit"
                onSubmit={handleSubmit}
                color="lightBlue"
                ripple="light"
                disabled={isSubmitting}
                className="m-auto"
              >
                SignIn
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  </>
  )
}