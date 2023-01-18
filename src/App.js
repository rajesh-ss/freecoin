import MyNavbar from "./components/Navbar/Navbar.js";
import classes from './App.css';
import AboutUs from './components/AboutUs.js';
import Goals from './components/Goals.js'
import Impact_eco from "./components/Impact_eco.js";
import HowItWorks from "./components/HowItWorks.js";
import OurNetwork from "./components/OurNetwork.js";
import Footer from "./components/Footer/Footer.js"
import Homepage from "./components/Homepage.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Motivates from "./components/Motivates.js";

function App() {
  return <>

<MyNavbar/>

  <Homepage></Homepage>
    <AboutUs/>
    <Goals></Goals>
    <Impact_eco></Impact_eco>
   <HowItWorks></HowItWorks>
   <Motivates/>
   <OurNetwork></OurNetwork>
   <Footer></Footer>
    </>
}

export default App;
