import * as yup from "yup";

const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const RegisterSchema = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6)
    .matches(validPassword, { message: "Please create a stroger password" })
    .required("Password is required"),

  confirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Password must matches")
    .required("Confirmed password is required"),
});

export { RegisterSchema };
