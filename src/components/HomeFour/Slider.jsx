import React from 'react';
import { Link } from 'react-router-dom';

import BannerBG from '../../assets/images/background/bg5.jpg';
import Halfcircle from '../../assets/images/icons/half-circle.png';
import WaveIcon from '../../assets/images/icons/wave.png';
import BannerImage from '../../assets/images/banner/banner3-1.jpg';

function Slider({ className }) {
    return (
        <>

            <section className={`banner-section-three ${className || ''}`}>
                <div className="bg" style={{ backgroundImage: `url(${BannerBG})`}} />
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="content-column col-xl-6 col-lg-7">
                            <div className="inner-column">
                                <div className="sec-title light alt">
                                    <img className="half-circle d-none d-lg-block" src={Halfcircle} alt="Image" />
                                    <span className="sub-title wow fadeInUp" data-wow-delay="200ms">// Digital It Solution</span>
                                    <h2 className="title wow fadeInUp" data-wow-delay="400ms">We Provide IT <br />& Business Solutions</h2>
                                    <div className="text wow fadeInUp" data-wow-delay="600ms">
                                        With every single one of our clients, we bring forth a deep passion for <br />
                                        creative problem solving which is what we deliver
                                    </div>
                                </div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                    <Link to="/page-services" className="theme-btn btn-style-one bdr-white"><span className="btn-title">Our Services</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-6 col-lg-5">
                            <div className="inner-column">
                                <div className="image-box text-center wow fadeInRight" data-wow-delay="1200ms">
                                    <img className="wave1 bounce-y" src={WaveIcon} alt="Image" />
                                    <figure className="image">
                                        <img src={BannerImage} alt="Image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         

        </>
    );
}

export default Slider;