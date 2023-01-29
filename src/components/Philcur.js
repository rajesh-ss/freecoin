import classes from './Philcur.module.css';


const Philcur = ()=>{

    const attr = classes.homeTxt +' container text-center '

    return(
         
   <div className={classes.homepage} id='Our Vision'>
   <div className={attr}>
      <h2>The Philanthropic Currency</h2>
      <p>powered by Impact Investments, Natural Capital & Team Humanity</p>
   </div>
    </div>
    );

}

export default Philcur;