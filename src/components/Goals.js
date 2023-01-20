import classes from './Goals.module.css';
import './Goals.module.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Group-64.png';
import img2 from '../assets/Group-63.png';
import img3 from '../assets/Group-65.png';


const Goals = ()=>{

  const custom =  'd-inline-block '+classes.imger;

  return (
    <div  className='d-flex flex-column flex-lg-row justify-content-between align-items-center mt-3 mt-md-0 mb-5 mb-md-0  mr-0 ml-0'> 
      
      <div className=' p-3'>
        <h2 className='text-justify'>OUR GOALS</h2>
        <p className='text-justify'>We engages with government, buiseness, NGOs , and consumers around the world to support pilicies</p>
      </div>
      
      <div className='w-100 d-inline-block w-0 w-md-75 p-0 mt-5 mb-5 '>
   <Carousel 
   className=''
   autoplay={false}
   responsive={3 }
  //  style="max-width:100%; max-height:200px !important;"
   >
               {/* <Carousel.Indicators></Carousel.Indicators>  */}
            <Carousel.Item className=' '>
        <img
          className="d-block img-fluid"
          src={img1}
          alt="First slide"

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={img2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> 
    </div>
    </div>
  );
 

//     let nam = 'mt-5 ';
//     nam+= classes.cont;

// return(
// <div className={nam}>

//     <div className="col-sm m-5 border border-primary">
//       <h2>OUR GOALS</h2>
//     </div>
//     <div className="col-sm m-5 border border-primary">
//       One of three columns
//     </div>
//     <div className="col-sm m-5 border border-primary">
//       One of three columns
//     </div>
//     <div className="col-sm m-5 border border-primary force-overflow">
//       One of three columns
//     </div>
//     <div className="col-sm m-5 border border-primary force-overflow">
//       One of three columns
//     </div>
//     <div className="col-sm m-5 border border-primary force-overflow">
//       One of three columns
//     </div>

// </div>
// );
}

export default Goals;



  


  {/**
      <div className='m-2 border border-primary flex-shrink-1'>
     
            <img className = {classes.myimg} src={img1}></img>
          
        </div>
        <div className='m-2 ml-2'>

            <img className = {classes.myimg} src={img2}></img>
   
        </div>
        <div className='m-2 ml-2'>
        
            <img className = {classes.myimg} src={img3}></img>
     
        </div>
*/}