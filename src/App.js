import React from "react";
import Main from "./Pages/Main/main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useMatch,
} from "react-router-dom";
import HeaderNav from "./Components/Navbar/HeaderNav";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Main/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import Service from "./Pages/Service/Service";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import Project from "./Pages/Project/Project";
import Blogfooter from "./Pages/Blog/Blogfooter/Blogfooter";

function FooterRouter() {
  const isBlogPage = useMatch("/blog");
  const isContactPage = useMatch("/contact");

  return <>{isBlogPage ? <Blogfooter /> : isContactPage ? "" : <Footer />}</>;
}

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterRouter />
      </Router>
    </>
  );
}

export default App;
