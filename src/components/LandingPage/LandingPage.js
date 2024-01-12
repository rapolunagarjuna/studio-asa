import logo from '../../logo.svg';
import {React, useState, useEffect} from "react";
import landing_img from '../../images/landing-img.svg';
import ellipsis from '../../images/ellipsis.svg'
import Services1Image from '../../images/services-bg-img1.svg'
import ornament2 from '../../images/ornament2.svg'
import arrowBtn from '../../images/arrowBtn.svg'
import seemore from '../../images/seemore.svg'

import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";



function LandingPage() {

    const [activeSection, setActiveSection] = useState('Home');

    const sectionOffsets = () => {
        return {
            Home: document.getElementById('Home').offsetTop - 100,
            About: document.getElementById('About').offsetTop - 100,
            Services: document.getElementById('Services').offsetTop - 100,
            Portfolio: document.getElementById('Portfolio').offsetTop - 100 ,
            Contact: document.getElementById('Contact').offsetTop - 200,
        };
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const offsets = sectionOffsets();

        if (scrollPosition < offsets.About) {
            setActiveSection('Home');
        } else if (scrollPosition >= offsets.About && scrollPosition < offsets.Services) {
            setActiveSection('About');
        } else if (scrollPosition >= offsets.Services && scrollPosition < offsets.Portfolio) {
            setActiveSection('Services');
        } else if (scrollPosition >= offsets.Portfolio && scrollPosition < offsets.Contact) {
            setActiveSection('Portfolio');
        } else if (scrollPosition >= offsets.Contact) {
            setActiveSection('Contact');
        }
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.closest('.Carousal-row').classList.add('paused');
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.closest('.Carousal-row').classList.remove('paused');
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className='flex flex-col LandingPage relative bg-secondary'>


            {/* ornament */}
            <img className='Ellipsis absolute bg-secondary' src={ellipsis} alt='ellipsis'/>

            {/* Hero Section */}
            <div id='Home' className="bg-secondary justify-center items-center" style={{
                height: "100vh",
                paddingTop: "48px",
                paddingBottom: "48px",
                paddingLeft: "94px",
                paddingRight: "94px",
            }}>


                <div className='flex flex-row h-full'>

                    <div className='flex flex-col w-1/2'>
                        <img src={logo} className="App-logo z-10" alt="logo"/>
                        <p className='Hero-Section-Heading text-primary tracking-heading font-heading text-heading text-left leading-heading'>Solving
                            problems with creative design</p>


                        <p className='Hero-Section-subHeading text-left text-primary tracking-subHeading font-subHeading text-subHeading leading-subHeading'>Leading
                            digital agency with solid design and development expertise.</p>

                    </div>


                    <div className='w-1/2 h-full z-10'>
                        <img src={landing_img} alt='landing page'/>
                    </div>

                </div>


            </div>

            {/* Menu */}
            <div className='Main-Menu mx-auto sticky top-0'>
                <div onClick={() => scrollToSection('Home')}
                     className={`Main-menu-item text-primary ${activeSection === 'Home' ? 'bg-color-scrolled' : ''}`}>Home
                </div>
                <div onClick={() => scrollToSection('About')}
                     className={`Main-menu-item text-primary ${activeSection === 'About' ? 'bg-color-scrolled' : ''}`}>About
                    Us
                </div>
                <div onClick={() => scrollToSection('Services')}
                     className={`Main-menu-item text-primary ${activeSection === 'Services' ? 'bg-color-scrolled' : ''}`}>Our
                    Service
                </div>
                <div onClick={() => scrollToSection('Portfolio')}
                     className={`Main-menu-item text-primary ${activeSection === 'Portfolio' ? 'bg-color-scrolled' : ''}`}>Portfolio
                </div>
            </div>


            {/* About section */}
            <div id='About' className='bg-secondary h-full w-full mt-44 mb-44'>

                <p className='text-primary text-center tracking-heading3 font-heading3 text-heading3 leading-heading3 '>About
                    Us</p>

                <p className='mx-auto w-3/4 mt-10  text-primary text-center tracking-heading2 font-heading2 text-heading2 leading-heading2 '>Leading
                    digital agency with solid design and development expertise. We build readymade website, mobile
                    application, and elaborate online business services.</p>

                <button className='Learn-more-btn mt-10 '>Learn More</button>
            </div>


            {/* Services section */}
            <div className='bg-secondary w-full'>

                <img id='Services' className={'z-0'} src={Services1Image} alt='services bg '/>

                <div className={'-mt-28 bg-primary z-5 relative'} style={{
                    borderRadius: '120px 120px 0px 0px',
                    paddingRight: '95px',
                    paddingLeft: '95px',
                    paddingTop: '110px',
                    paddingBottom: '200px'
                }}>
                    <img className={"absolute top-0 right-0 w-1/2 z-10"} src={ornament2} alt='ornament to the right'/>

                    <p className={'z-20 w-3/4 text-left text-white tracking-heading font-heading text-heading leading-heading'}>What
                        We're Good At</p>

                    <p className={'w-1/2 mt-1 text-left text-white tracking-subHeading font-subHeading text-subHeading leading-subHeading'}>It’s
                        not about limitations, but this is something about what we focus on.</p>


                    <ul className={'mt-36'}>
                        <li className={'Services-Item'}>
                            <div className={'flex flex-row justify-between'}>
                                <div className={'flex flex-row w-3/4 justify-between'}>
                                    <div className={'flex flex-col justify-between w-1/4'}>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>01
                                        </div>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>UI/UX
                                            Design
                                        </div>
                                    </div>
                                    <div
                                        className={'w-1/2 justify-center flex flex-col text-left text-white tracking-subHeading font-subHeading text-subHeading leading-subHeading'}>User-Centric
                                        Approach: We believe that design should revolve around the needs and desires of
                                        your users
                                    </div>
                                </div>


                                <div className={'flex flex-col justify-center'}>
                                    <button><img src={arrowBtn} alt={'arrow btn'}/></button>
                                </div>
                            </div>
                        </li>

                        <li className={'Services-Item'}>
                            <div className={'flex flex-row justify-between'}>
                                <div className={'flex flex-row w-3/4 justify-between'}>
                                    <div className={'flex flex-col justify-between w-1/4'}>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>02
                                        </div>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>Development
                                            Design
                                        </div>
                                    </div>
                                    <div
                                        className={'w-1/2 justify-center flex flex-col text-left text-white tracking-subHeading font-subHeading text-subHeading leading-subHeading'}>Customized
                                        Solutions: We believe in the power of tailored solution. Our development
                                        services are designed to meet your specific.
                                    </div>
                                </div>


                                <div className={'flex flex-col justify-center'}>
                                    <button><img src={arrowBtn} alt={'arrow btn'}/></button>
                                </div>
                            </div>
                        </li>

                        <li className={'Services-Item'}>
                            <div className={'flex flex-row justify-between'}>
                                <div className={'flex flex-row w-3/4 justify-between'}>
                                    <div className={'flex flex-col justify-between w-1/4'}>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>03
                                        </div>
                                        <div
                                            className={'text-left text-white tracking-heading2 font-heading2 text-heading2 leading-heading2'}>3D
                                            Design
                                        </div>
                                    </div>
                                    <div
                                        className={'justify-center w-1/2 flex flex-col text-left text-white tracking-subHeading font-subHeading text-subHeading leading-subHeading'}>Cutting-Edge
                                        Technology : We stay at the forefront of 3D technology, constantly exploring new
                                        tools and techniques
                                    </div>
                                </div>


                                <div className={'flex flex-col justify-center'}>
                                    <button><img src={arrowBtn} alt={'arrow btn'}/></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>


            {/* Portfolio section */}
            <div id='Portfolio' style={{borderRadius: '120px 120px 0px 0px'}}
                 className='bg-white h-full w-full z-15 relative -mt-28'>
                <div style={{
                    marginLeft: '95px',
                    marginTop: '150px',
                }}>
                    <p className='text-primary tracking-heading font-heading text-heading text-left leading-heading'>Our
                        Latest Project's</p>

                    <p className='text-primary text-left tracking-subHeading font-subHeading text-subHeading leading-subHeading w-1/2'>It’s
                        not about limitations, but this is something about what we focus on.</p>

                </div>

                <div className={'Carousal mt-32'}>

                    <div className={'Carousal-row'}>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>

                    </div>

                    <div className={'Carousal-row'}>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>
                        <div className='Carousal-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className={'see-more-image'} src={seemore} alt='seemore logo'/>
                        </div>

                    </div>

                </div>

            </div>


            {/* Testimonials section */}
            <Testimonials />


            {/* Footer section */}
            <Footer />

        </div>

    );
}

export default LandingPage;
