import classes from "./OurNetwork.module.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/Bussiness.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const OurNetwork = () => {
  const attrImg = classes.imgCap + " figure-img img-fluid rounded";

  const conta = classes.ImgCont + " thumbnail ";

  return (
    <div className={classes.cont} id="Our Network">
      <div>
        <h3 className={classes.mainTxt}>OUR NETWORK</h3>
        <hr className={classes.line} />
        <div class="container">
          <div class="row mt-4 mb-4">
            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img6}></img>
              </div>
            </div>
            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img2}></img>
              </div>
            </div>

            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img3}></img>
              </div>
            </div>

            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img4}></img>
              </div>
            </div>

            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img5}></img>
              </div>
            </div>

            <div className="col-lg-4 col-xs-6 mb-2 mt-2 mw-100">
              <div class={conta}>
                <img className="img-fluid" src={img7}></img>
              </div>
            </div>
          </div>

          {/* <div class="row mt-4 mb-4">
          <div class="col-lg-4 col-xs-6">
            <div class='thumbnail'>
                <img className='img-fluid' src={img4}></img>
            </div>
          </div>

          <div class="col-lg-4 col-xs-6">
            <div class='thumbnail'>
                <img className='img-fluid' src={img5}></img>
            </div>
          </div>

          <div class="col-lg-4 col-xs-6">
            <div class='thumbnail'>
                <img className='img-fluid' src={img6}></img>
            </div>
          </div>

        </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
