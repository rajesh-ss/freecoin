import classes from "./Goals.module.css";
import "./Goals.module.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/Group-64.png";
import img2 from "../assets/Group-63.png";
import img3 from "../assets/Group-65.png";
import img4 from "../assets/Group-66.png";

const Goals = () => {
  const custom = "d-inline-block " + classes.imger;

  return (
    <div className={classes.conatiner}>
      <div className={classes.headerContainer}>
        <h1 className={classes.textPeople}>
          PEOPLE <br /> PLANET <br />
          PROSPERITY
        </h1>
        <p className={classes.para}>
          Impact Ecosystem brings together businesses,
          <br /> communities, government, individuals,NGOs
          <br /> and mother nature to achieve mutual <br /> prosperity.
        </p>
      </div>

      <div className={classes.CarouselConatiner}>
        <Carousel className="" autoplay={false} responsive={3}>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block img-fluid" src={img4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Goals;
