import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.homepage} id="home">
      <p>
        <span id={classes.impab}>IMPACT</span> <span id={classes.impab1}>ECOSYSTEM</span> 
      </p>
    </div>
  );
};

export default Homepage;
