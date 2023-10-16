import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "./pages/LoginFormPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginFormPage />,
  },
]);

export default browserRouter;
