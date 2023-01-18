import classes from './Homepage.module.css';


const Homepage = ()=>{

    const attr = classes.homeTxt +' container text-center '

    return(
         
   <div className={classes.homepage} id='home'>
   <div className={attr}>
      <h2>The Philanthropic Currency</h2>
      <p>powered by impact investments, Natural Capital & Team Humanity</p>
   </div>
    </div>
    );

}

export default Homepage;