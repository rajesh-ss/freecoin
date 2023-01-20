import classes from "./Motivates.module.css";

import img1 from '../assets/mot1.png'
import img2 from '../assets/mot2.png';
import img3 from '../assets/mot3.png';
import img4 from '../assets/mot4.png';
import right from '../assets/rightArrow.png';
import left from '../assets/leftArrow.png';
import { useState } from "react";

const Motivates = () => {



  const contents =[

    { 
      "title":"Poverty Alleviation",
      "cont":"Poverty reduction is one of the world's most important challenges, and it is proposed the private sector has an important role to play in creating the economic growth, employment and purchasing options needed for significant poverty reduction.",
      "imgurl":img1,
    },
    {
      "title":"Climate Change",
      "cont":"Poverty reduction is one of the world's most important challenges, and it is proposed the private sector has an important role to play in creating the economic growth, employment and purchasing options needed for significant poverty reduction.",
      "imgurl":img2,
    },
    {
      "title":"Biodiversity Conservation",
      "cont":"Poverty reduction is one of the world's most important challenges, and it is proposed the private sector has an important role to play in creating the economic growth, employment and purchasing options needed for significant poverty reduction.",
      "imgurl":img3,
    },
    {
      "title":"Healthcare /Education",
      "cont":"Poverty reduction is one of the world's most important challenges, and it is proposed the private sector has an important role to play in creating the economic growth, employment and purchasing options needed for significant poverty reduction." ,  
      "imgurl":img4,
    }

]

const [level, setLevel] = useState(0);

console.log(level)

//console.log(contents[0].imgurl)

const custom = classes.cont+' mt-5';

  return (
    <div className={custom}>
      <h1 className="text-center  mb-3">WHAT MOTIVATES US?</h1>
      <div className="container mt-md-5 ">
        <div className="row">
          <div className="col-md-1 mb-5 mb-md-0">
            <div className={classes.arrw}>
                 <div className={
                  level==0?classes.high:classes.nor
                 }>01</div>
                 <div className={
                  level==1?classes.high:classes.nor
                 }>02</div>
                 <div className={
                  level==2?classes.high:classes.nor
                 }>03</div>
                 <div className={
                  level==3?classes.high:classes.nor
                 }>04</div>
                 <div 
                  
                 onClick={
                  ()=>{
                    level<=0?setLevel(3):setLevel(level-1)
                
                }}><img 
                className={classes.arrImg}
                src={left}/>
                
                </div>
                 <div onClick={
                   ()=>{
                    level>=3?setLevel(0):setLevel(level+1)
                
                }
                 }><img 
                 className={classes.arrImg}
                 src={right}/></div>
            </div>
          </div>
          <div className="col-md-6">
                  <h1>{contents[level].title}</h1>
                  <p>{contents[level].cont}</p>
          </div>
          <div className="col-md-5 thumbnail">
                 <img
                      src={contents[level].imgurl}
                    
                 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivates;
