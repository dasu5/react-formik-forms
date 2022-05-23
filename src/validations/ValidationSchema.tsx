import * as Yup from "yup";

export const validationSchema = () => {
  const ValidationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .max(15, "Must be 15 characters or less"),
    lastName: Yup.string()
      .required("Last Name is required")
      .max(15, "Must be 15 characters or less"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    age: Yup.number().test(
      "limit",
      "You cannot add negative numbers or zero as age",
      (value) => {
        const age = Number(value);
        if (age <= 0) {
          return false;
        }
        return true;
      }
    ),
  });
  return ValidationSchema;
};
