import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={classes.cont}>
      <h1 className="mt-4 mb-4 ">
        WHERE DO YOU FIT INTO THIS POWERFUL NETWORK?
      </h1>
      <div className={classes.line}></div>
      <form className={classes.frm}>
        <div className={classes.subsContainer}>
          <p className={classes.subs}>Subscribe to our newsletters</p>
        </div>
        <div className={classes.resfom}>
          <input className={classes.inp} placeholder="Email Address"></input>
          <button className={classes.btn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
