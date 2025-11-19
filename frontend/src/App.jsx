import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About /> }
     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}







