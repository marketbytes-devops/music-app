import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import ContactUs from "./Pages/ContactUs"
import Events from"./Pages/Events"
import SectionTwo from "./Pages/Events"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About /> },
      { path:"/ContactUs", element:<ContactUs/> },
      { path:"events", element:<Events/> },
       { path:"/events/card1", element:<SectionTwo/>}
    ],
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}







