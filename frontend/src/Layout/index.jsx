import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"; 

const index = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default index