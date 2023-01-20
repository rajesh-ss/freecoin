import classes from './HowItWorks.module.css'


const HowItWorks = () =>{

    return (

        <div className={classes.outCont}   id='How it Works'> 
            <div >
            <h2 className={classes.mainTxt}>HOW IT WORKS</h2>
            <hr className={classes.line}/>
                <ol className='ls'>
                    <li ><span>IE point tokens are distributed to Ecosystem Service Stakeholders, Impact Investors, Natural Asset Owners & Nonprofits.</span></li>
                    <li>
                        <span>Like gift cards, loyalty points and government currency, value can be:</span>
                        </li>
                    <div className={classes.insls}>
                        <div className={classes.smbox}><p>USED FOR PURCHASES</p></div>
                        <div className={classes.smbox2}><p>TRANSFERRED/GIFTED/DONATED</p></div>
                        <div className={classes.smbox}><p>GIVEN AS A REWARD TO INCENTIVIZE</p></div>
                        </div>
                       
                    <li><span>Merchants & Ecosystem Partners who accept ie.Money as payment can redeem ie.Money for local currency like $USD OR spend/transfer/gift/donate within the Impact Ecosystem.</span></li>
                </ol>
            </div>
        </div>
    );
}


export default HowItWorks;