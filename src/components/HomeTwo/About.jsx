import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../../assets/images/resource/about2-3.jpg';
import AboutImage2 from '../../assets/images/resource/about2-1.jpg';
import AboutImage3 from '../../assets/images/resource/about2-2.jpg';


function About({ className }) {
    return (
        <>

        <section id='about' className={`about-section-two pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Get To Know</span>
                                <h2 className="scrub-each-word text-split">The best technology & digital solutions</h2>
                            </div>
                            <div className="text mb-20">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna ediet aliqua lonm andhn tempor facilisis sags</div>
                            <ul className="list-style-two mb-30">
                                <li><i className="fa-solid fa-circle-check" />Reliable Support and Maintenance</li>
                                <li><i className="fa-solid fa-circle-check" />Scalability and Flexibility</li>
                                <li><i className="fa-solid fa-circle-check" />Advanced Security Measures</li>
                            </ul>
                            <div className="row">
                                <div className="about-block-img mb-xs-20 col-sm-6">
                                    <img src={AboutImage} alt="Image" />
                                    <div className="ml-20">
                                        <h6 className="title mb-0">Alex Munira</h6>
                                        <span>Founder</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <Link to="/page-about" className="theme-btn btn-style-one mt-0"><span className="btn-title">Explore Now</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 wow fadeInRight">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src={AboutImage2} alt="Image" /></figure>
                                <figure className="image-2 overlay-anim"><img src={AboutImage3} alt="Image" /></figure>
                                <div className="info-box bounce-x">
                                    <div className="inner">
                                        <i className="icon flaticon-business-016-social-campaign" />
                                        <div className="content">
                                            <h3 className="count">30+</h3>
                                            <h5 className="text-two">Years of <br/> experience</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default About;
