import "./styles.scss";
import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { RegisterSchema } from "../schemas/register.schema";
import { Link } from "react-router-dom";

function RegisterForm() {
  const onSubmit = () => {
    console.log("submit");
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { fullname: "", email: "", password: "", confirmation: "" },
    onSubmit,
    validationSchema: RegisterSchema,
  });

  return (
    <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 login-form">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 border-solid border-2 rounded text-2xl max-w-xl w-full p-8 bg-white shadow-lg"
        autoComplete="off"
      >
        <div>
          <div className="mb-2 block text-4xl">
            <Label htmlFor="fullname1" value="Your fullname" />
          </div>
          <TextInput
            id="fullname1"
            type="text"
            name="fullname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
          />
        </div>
        <div>
          <div className="mb-2 block text-4xl">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            name="password"
            id="password1"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmation1" value="Your confirmed password" />
          </div>
          <TextInput
            name="confirmation"
            id="confirmation1"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmation}
            className={`w-full ${errors.confirmation ? "input-error" : ""}`}
          />
        </div>
        <Link to="/login">
          <p className="text-sm text-sky-700 underline">Already have account</p>
        </Link>
        <Button className="gap-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
