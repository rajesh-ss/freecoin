import MyNavbar from "./components/Navbar/Navbar.js";
import classes from "./App.css";
import AboutUs from "./components/AboutUs.js";
import Goals from "./components/Goals.js";
import Impact_eco from "./components/Impact_eco.js";
import HowItWorks from "./components/HowItWorks.js";
import OurNetwork from "./components/OurNetwork.js";
import Footer from "./components/Footer/Footer.js";
import Philcur from "./components/Philcur.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Motivates from "./components/Motivates.js";
import Homepage from "./components/Homepage.js";
import NewsLetter from "./components/NewsLetter.js";

function App() {
  return (
    <div id="rtt">
      <MyNavbar />

      <Homepage></Homepage>

      <AboutUs />
      <Goals></Goals>
      <Philcur></Philcur>
      {/* <Impact_eco /> */}
      <HowItWorks></HowItWorks>
      {/* <Motivates /> */}
      <OurNetwork />
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
