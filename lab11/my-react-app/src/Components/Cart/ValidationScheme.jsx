import * as yup from "yup";

const phoneRegExp = /^((((\+380)(\d{9}))|((0{1}\d{2}))(\d{7})))$/;

export const basicSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(1)
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: yup
    .string()
    .min(1)
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  address: yup
    .string()
    .min(5)
    .max(100)
    .required("Required"),
  phone: yup
    .string()
    .max(20)
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});
