import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "./ValidationScheme";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { cart_id_bold } from "./Cart";
import { Link } from "react-router-dom";
import "./CartCheckout.css";

export const onSubmit = (values, actions) => {};

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

  const ConditionalLink = ({ children, to, condition }) =>
    !!condition && to ? (
      <Link to={to} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  console.log(errors);
  return (
    <div>
      <NavBar bold_cart={cart_id_bold} />
      <div className="checkout_container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-labels">
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
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
export default CartCheckout;
