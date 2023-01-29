import classes from "./Footer.module.css";
import faceBook from "../../assets/facebook.png";
import linkdin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import logo from "../../assets/Group78.svg";

const Footer = () => {
  const txtbtn = " container mw-75 ";

  return (
    <div className={classes.cont}>
      <div className={txtbtn}>
        <div className="row mw-75">
          <div className="col-md-6 text-light  d-flex justify-content-md-start align-items-md-center justify-content-center mb-3  mb-md-0 mt-3  mt-md-0">
            <img className={classes.remImg} src={logo} />
          </div>

          <div className="col-md-2 text-light d-flex justify-contents -md-space evenly align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
            <div className="d-flex flex-md-column align-items-md-start ">
              {/* <a  className='m-md-0 m-2' href='#home'>Home</a> */}
              
              <a
                className="m-md-0 m-2"
                // href='#about'
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("about").offsetTop - 100
                  );
                }}
              >
                About Us
              </a>
            </div>
          </div>

          <div className="col-md-2 text-light  d-flex justify-contents -md-space evenly  align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
            <div className="d-flex flex-md-column flex-row align-items-md-start">
              
              <a
                className="m-md-0 m-2"
                // href='#Our Network'
                // onClick={
                //   ()=>{window.scrollTo(0, document.getElementById("Our Network").offsetTop-100)  }
                // }
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("Our Network").offsetTop - 100,
                    behavior: "smooth",
                  });
                }}
              >
                Our Network
              </a>
            </div>
          </div>

          <div className="col-md-2 text-light  d-flex justify-contents -md-space evenly  align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
            <div className="d-flex flex-md-column flex-row align-items-md-start">
            <a
                className="m-md-0 m-2"
                // href='#How it Works'
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("How it Works").offsetTop - 100
                  );
                }}
              >
                How it works
              </a>
              
            </div>
          </div>
        </div>

        <hr className={classes.line} />

        
        <div className="d-flex flex-md-row  align-items-md-center align-items-start justify-content-center justify-content-md-start mb-4 ml-3 mr-3">
        <a href="https://www.facebook.com/people/Impact-Ecosystem/100089897823244/" target="_blank">
          <img className="m-3" src={faceBook}  />
          </a>

        
         <a href="https://twitter.com/iemoneyhq" target={"_blank"} >          
          <img className="m-3" src={twitter} />
        </a>
         <a href="https://www.linkedin.com/company/impact-ecosystem/about/?viewAsMember=true" target={"_blank"}>
          <img className="m-3" src={linkdin} />
        </a>

        <a href="https://www.instagram.com/ie.moneyhq/" target={"_blank"}> 
          <img className="m-3" src={instagram} />
        </a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
