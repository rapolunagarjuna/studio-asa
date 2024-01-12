import ornament2 from "../../../images/ornament2.svg";
import arrowBtn from "../../../images/arrowBtn.svg";
import logo_v_2 from "../../../images/iconv2.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";
import youtube from "../../../images/youtube.svg";
import {React} from "react";

function Footer() {
    return (
        <div id='Contact' className='Contact bg-primary'>
            <img className={'top-0 right-0 w-1/2 absolute'} src={ornament2} alt={'ornament'}/>

            <p className={'text-left text-white text-heading font-heading leading-heading tracking-heading z-30'}>Let's
                talk together</p>

            <div
                className={'pt-5 pb-2 flex flex-row items-center w-1/2 border-b-2 bg-primary border-greenPastel justify-between'}>
                <input placeholder={'Enter your email.'} type={'text'}
                       className={'w-3/4 bg-primary text-subHeading text-left tracking-subHeading leading-subHeading font-subHeading text-greenPastel border-green my-auto'}/>

                <button className={'flex flex-col items-center justify-center '}
                        style={{width: "54px", height: "54px"}}><img src={arrowBtn} alt={'arrow btn'}/></button>
            </div>


            <div className={'flex flex-row pb-16 mt-auto justify-between'}>
                <div>
                    <img src={logo_v_2} alt={'white version of logo'}/>

                    <div style={{width: "220px"}}>
                        <p className={'CopyRight-item'}>Your Creative Hub for Seamless Collaboration and Innovation</p>
                        <div className={'flex flex-row mt-10 justify-between'}>
                            <img src={facebook} alt={'facebook logo'}/>
                            <img src={instagram} alt={'instagram logo'}/>
                            <img src={twitter} alt={'twitter logo'}/>
                            <img src={youtube} alt={'youtube logo'}/>
                        </div>
                    </div>

                </div>

                <div className={'flex flex-row justify-between'} style={{width: "450px"}}>

                    <ul>
                        <li className={'CopyRight-header'}>About</li>
                        <li className={'CopyRight-item'}>About us</li>
                        <li className={'CopyRight-item'}>Features</li>
                        <li className={'CopyRight-item'}>Blog</li>
                    </ul>

                    <ul>
                        <li className={'CopyRight-header'}>Company</li>
                        <li className={'CopyRight-item'}>How we work</li>
                        <li className={'CopyRight-item'}>Press room</li>
                        <li className={'CopyRight-item'}>Jobs</li>
                        <li className={'CopyRight-item'}>Community</li>
                    </ul>

                    <ul>
                        <li className={'CopyRight-header'}>Legal</li>
                        <li className={'CopyRight-item'}>Terms of use</li>
                        <li className={'CopyRight-item'}>Privacy Policy</li>
                        <li className={'CopyRight-item'}>Security Policy</li>
                        <li className={'CopyRight-item'}>Cookie Settings</li>
                    </ul>

                </div>


            </div>


            <p className={'CopyRight'}>All Rights Reserved ®Studioāśā 2024</p>


        </div>
    );
}

export default Footer;
