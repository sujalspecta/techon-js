import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../../assets/images/resource/about4-1.jpg';
import AboutImage2 from '../../assets/images/resource/about4-2.jpg';
import Sign from '../../assets/images/resource/sign.png';


function About({ className }) {
    return (
        <>

        <section className={`about-section-four ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-four">About Us</span>
                                <h2 className="scrub-each-word text-split">Empowering businesses through innovative</h2>
                            </div>
                            <div className="text mb-20">Aliquam eros justo, posuere lobortis viverr augue mattis fermentum non ullamcorper viverra laoreet augue. Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum non ullamcorper</div>
                            <ul className="list-style-two mb-30">
                                <li><i className="fa-solid fa-circle-check" />Mistakes To Avoid to the dummy printing has bees ind</li>
                                <li><i className="fa-solid fa-circle-check" />Your Startup industry standard loream saum</li>
                                <li><i className="fa-solid fa-circle-check" />Knew About Fonts text the printing and something do</li>
                            </ul>
                            <div className="row">
                                <div className="col-sm-5">
                                    <Link to="/page-about" className="theme-btn btn-style-one mt-0"><span className="btn-title">Explore Now</span></Link>
                                </div>
                                <div className="about-block-img d-flex align-items-center justify-content-sm-center mb-xs-20 col-sm-7">
                                    <div className="border-end pe-3">
                                        <h5 className="title mb-0">Alberlor J. William</h5>
                                        <span>CEO, Techon</span>
                                    </div>
                                    <img className="border border-0 rounded-0 ms-3 w-auto h-auto" src={Sign} alt="Signeture" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 wow fadeInRight">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src={AboutImage} alt="Image" /></figure>
                                <figure className="image-2 overlay-anim"><img src={AboutImage2} alt="Image" /></figure>
                                <div className="info-box bounce-x">
                                    <div className="inner">
                                        <i className="icon flaticon-agency-graphic-design" />
                                        <div className="content ml-20">
                                            <h3 className="count">25+</h3>
                                            <div className="text">Years of Experience</div>
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
