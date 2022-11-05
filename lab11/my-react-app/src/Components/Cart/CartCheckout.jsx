import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "./ValidationScheme";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { cart_id_bold } from "./Cart";
import { Link } from "react-router-dom";
import "./CartCheckout.css";
import { useState, useEffect } from "react";

export const onSubmit = (values, actions) => {
  // console.log(values);
  // console.log(actions);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // actions.resetForm();
};

function CartCheckout() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phone: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  // function eachClick() {
  //   if (!isSubmitting) {
  //     alert("Please gap all data in the form!");
  //   } else {

  //   }
  // }
  // const [submit, setSubmit] = useState(false);

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? (
      <Link to={to} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );
  // useEffect(() => {
  //   // console.log('Count is now: ', count);
  //   setSubmit(true);
  // }, [submit]);

  // const handleClick = (event) => {
  //   setSubmit(true);
  // };

  console.log(errors);
  return (
    <div>
      <NavBar bold_cart={cart_id_bold} />
      <div className="checkout_container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-labels">
            <label htmlFor="firstname">First Name</label>
            <input
              value={values.firstname}
              onChange={handleChange}
              id="firstname"
              type="firstname"
              placeholder="Enter First Name"
              onBlur={handleBlur}
            />
            {console.log(
              "touched.firstname ",
              touched.firstname,
              "errors.firstname ",
              errors.firstname
            )}
            {errors.firstname && touched.firstname && <p>{errors.firstname}</p>}
          </div>

          <div className="input-labels">
            <label htmlFor="lastname">Last Name</label>
            <input
              value={values.lastname}
              onChange={handleChange}
              id="lastname"
              type="lastname"
              placeholder="Enter Last Name"
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname && <p>{errors.lastname}</p>}
          </div>

          <div className="input-labels">
            <label htmlFor="email">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Enter your email"
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </div>

          <div className="input-labels">
            <label htmlFor="phone">Phone</label>
            <input
              value={values.phone}
              onChange={handleChange}
              id="phone"
              type="phone"
              placeholder="Enter Phone"
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone && <p>{errors.phone}</p>}
          </div>

          <div className="input-labels">
            <label htmlFor="address">Address</label>
            <input
              value={values.address}
              onChange={handleChange}
              id="address"
              type="address"
              placeholder="Enter Adsress"
              onBlur={handleBlur}
            />
            {errors.address && touched.address && <p>{errors.address}</p>}
          </div>
          <button disabled={isSubmitting} type="submit" id="checkout_button">
            <ConditionalLink to="/cart/success" condition={isSubmitting}>
              Submit
            </ConditionalLink>
          </button>
        </form>
      </div>
      <div className="pre_footer_buttons_checkout">
        <button>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p>Go Back</p>
          </Link>
        </button>
        <div>
          {/* {isSubmitting &
          ( */}

          {/* } */}
        </div>
        {/* <button> */}
        {/* <Link to="/cart/checkout" style={{ textDecoration: "none" }}>
            <p>Continue</p>
          </Link> */}
        {/* </button> */}
      </div>
      <Footer />
    </div>
  );
}
export default CartCheckout;
