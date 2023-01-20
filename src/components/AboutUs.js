import classes from './AboutUs.module.css';



const AboutUs = ()=>{

    const custom = classes.cont+' mb-5 mt-5'
return(
<>
    <div className={custom} id='about'>
        <h2 className='container-md text-center'>Introducing</h2>
        <h1 className='container-md text-center '>IE.Money</h1>
        <p className='container-sm text-center '>A Holistic Solution that includes Revenue Streams for Ecosystem Service Stakeholders & Income for Natural Capital Owners</p>
        <button type="button" class="btn mt-md-5 btn-sm container-md text-center">Join The Waitlist</button>
    </div>
</>
);
}


export default AboutUs;