import classes from "./AboutUs.module.css";

const AboutUs = () => {
  const custom = "mt-5 mb-0 mt-md-0 "+classes.cont ;
  return (
    <>
      <div className={custom} id="about">
        <h2 className="container-md text-center">Introducing</h2>
        <h1 className="container-md text-center ">IE.Money</h1>
        <p className="container-sm text-center ">
          Providing grants to nonprofits and rewards for ecosystem services,
          {"\n"}
          impact investments and regenerative products.
        </p>
        <button
          type="button"
          class="btn mt-md-5 btn-sm container-md text-center"
          id={classes['bbtt']}
        >
          Join our Waitlist
        </button>
      </div>
    </>
  );
};

export default AboutUs;
