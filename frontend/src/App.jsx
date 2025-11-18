import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path:"/ContactUs", element:<ContactUs/> },
     
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}







