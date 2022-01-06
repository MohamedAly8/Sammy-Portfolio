// For navbar
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    <Footer/>
    </div>;
};

export default App;