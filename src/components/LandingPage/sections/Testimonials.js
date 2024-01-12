import clientImg from "../../../images/clientImg.svg";
import {React} from "react";
import './styles/Testimonials.css';
import company1 from '../../../images/company.svg'
import leftArrow from '../../../images/left_arr.svg'
import rightArrow from '../../../images/right_arr.svg'

function Testimonials() {
    return (
        <div>
            {/* Testimonials section */}
            <div className={'Testimonials bg-green'}>

                <p className={'text-primary text-left tracking-heading font-heading text-heading leading-heading'} style={{borderRadius: "40px"}}>What
                    Our Clients Are Saying</p>

                <div className={'w-full mt-10 flex flex-row'} style={{marginBottom: "180px"}}>
                    <div className={'w-1/2'} style={{borderRadius: '40px'}}>
                        <img src={clientImg} alt={'client'}/>
                    </div>

                    <div className={'w-1/2 border-l-primary border-l-2 ml-12 pl-12 h-fit my-auto box-border'}>

                        <p className={'quote text-primary'}>“Matt's powerful introductions helped us close over 50% of our $100M fundraise to reforest the Amazon; he is truly a world-class asset to any team working in the climate space.”</p>

                        <p className={'author text-primary mt-10'}>– Peter Fernandez, CEO Expedia</p>


                        <div className={'mt-10 justify-between flex flex-row'}>
                            <img src={company1} alt={'company-logo-1'}/>
                            <div className={"flex flex-row"}>
                                <button><img src={leftArrow} alt={'left arrow'}/></button>

                                <div className={'text-primary flex flex-row justify-center items-center text-heading3 pl-5 pr-5'}>
                                    <span>1</span>
                                    <span className={'ml-1 mr-1'}>/</span>
                                    <span>2</span>
                                </div>

                                <button><img src={rightArrow} alt={'right arrow'}/></button>
                            </div>
                        </div>

                    </div>


                    <div></div>

                </div>

            </div>
        </div>
    );
}

export default Testimonials;