import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "./pages/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginFormPage />,
  },
  {
    path: "/register",
    element: <RegisterFormPage />,
  },
  {
    path: "/login",
    element: <LoginFormPage />,
  }
]);

export default browserRouter;
