import classes from './Impact_eco.module.css';



const Impact_eco = ()=>{

    let style_cont = 'h-100 d-flex flex-column pb-md-5 align-items-center justify-content-center justify-content-md-end '+ classes.box;

    return (
    <div className={classes.cont}>
        <div className={style_cont}>   
        <h2 className='text-center  mb-md-5 pb-md-3'>Introducing IMPACT Ecosystem</h2>
            <p className='text-center mb-md-5 pb-md-3'>A Holistic Solution that includes Revenue Streams for Ecosystem Service Stakeholders & Income for Natural Capital Owners</p>
            
            </div>
    </div>

    );
}


export default Impact_eco;