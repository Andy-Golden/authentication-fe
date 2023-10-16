import "./styles.scss";
import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/login.schema";

function LoginForm() {
  const onSubmit = () => {
    console.log("submit");
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit,
      validationSchema: LoginSchema,
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
            className="input-error"
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
            className={`w-full ${
              errors.password ? "input-error" : ""
            }`}
          />
        </div>
        
        <Button className="gap-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
