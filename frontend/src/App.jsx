import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}







