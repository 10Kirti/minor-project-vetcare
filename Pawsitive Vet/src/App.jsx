import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Veterinarian from "./Pages/Veterinarian/Veterinarian";
import Blog from "./Pages/Blog/Blog";
import FirstBlog from "./Pages/FirstBlog/FirstBlog";
import Gradient from "./components/Gradient/Gradient";
import SecondBlog from "./Pages/SecondBlog/SecondBlog";
import ThirdBlog from "./Pages/ThirdBlog/ThirdBlog";
import ForthBlog from "./Pages/ForthBlog/ForthBlog";
import FifthBlog from "./Pages/FifthBlog/FifthBlog";
import SixthBlog from "./Pages/SixthBlog/SixthBlog";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ServicesVet from "./Pages/ServiceVet/ServiceVet";

function App(){
  return (
    <>
    <Gradient></Gradient>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about-us" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/veterinarian" element={<Veterinarian></Veterinarian>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/blog/firstblog" element={<FirstBlog></FirstBlog>}></Route>
      <Route path="/blog/secondblog" element={<SecondBlog></SecondBlog>}></Route>
      <Route path="/blog/thirdblog" element={<ThirdBlog></ThirdBlog>}></Route>
      <Route path="/blog/forthblog" element={<ForthBlog></ForthBlog>}></Route>
      <Route path="/blog/fifthblog" element={<FifthBlog></FifthBlog>}></Route>
      <Route path="/blog/sixthblog" element={<SixthBlog></SixthBlog>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/services" element={<ServicesVet></ServicesVet>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}
export default App