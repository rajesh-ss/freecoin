import classes from "./Footer.module.css";
import faceBook from '../../assets/facebook.png';
import linkdin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import logo from '../../assets/Group78.svg';

const Footer = () => {
  const txtbtn =  " container mw-75 ";

  return (
    <div className={classes.cont}>
      <div className={txtbtn}>

        <div className="row mw-75">

          <div className="col-md-6 text-light  d-flex justify-content-md-start align-items-md-center justify-content-center mb-3  mb-md-0 mt-3  mt-md-0">
          <img className={classes.remImg} src={logo}/>
          </div>

          <div className="col-md-2 text-light d-flex justify-content-md-center align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
            <div className='d-flex flex-md-column align-items-md-start '>
                <a  className='m-md-0 m-2' href='#home'>Home</a>
                <a  className='m-md-0 m-2' href='#Our Vision'>Our Vision</a>
                <a  className='m-md-0 m-2' href='#About Us'>About Us</a>
            </div>
          </div>

          <div className="col-md-2 text-light  d-flex justify-content-md-start  align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
          <div className='d-flex flex-md-column flex-row align-items-md-start'>
                <a  className='m-md-0 m-2' href='#How it Works'>How it works</a>
                <a  className='m-md-0 m-2' href='#Our network'>Our network</a>
            </div>
          </div>
          
          <div className="col-md-2 text-light  d-flex justify-content-md-start  align-items-md-end mb-3  mb-md-0 mt-3  mt-md-0">
          <div className='d-flex flex-md-column flex-row align-items-md-start'>
                <a  className='m-md-0 m-2' href=''>Terms and conditions</a>
                <a  className='m-md-0 m-2' href=''>Privacy policy</a>
            </div>
          </div>

        </div>

        <hr className={classes.line}/>

        <div className='d-flex flex-md-row  align-items-md-center align-items-start justify-content-center justify-content-md-start mb-4'>
              <img className='m-1' src={faceBook}/>
              <img className='m-1' src={twitter}/>
              <img className='m-1' src={linkdin}/>
              <img className='m-1' src={instagram}/>
            </div>

      </div>
    </div>
  );
};

export default Footer;
