import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../../assets/images/resource/about1-1.jpg';
import AboutImage2 from '../../assets/images/resource/about1-2.jpg';
import AboutIcon from '../../assets/images/icons/icon-dots-1.png';


function About({ className }) {
    return (
        <>

        <section id='about' className={`about-section ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">ABOUT COMPANY</span>
                                <h2 className="scrub-each-word text-split">Your partner for software innovation</h2>
                                <div className="text">Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</div>
                            </div>
                            <div className="about-block">
                                <div className="inner-box">
                                    <i className="icon flaticon-agency-technology" />
                                    <div className="content">
                                        <h5 className="title">End to End Development</h5>
                                        <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work have suffered alteration</div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-block">
                                <div className="inner-box"><i className="icon flaticon-agency-laptop" />
                                    <div className="content">
                                        <h5 className="title">Software IT Outsource</h5>
                                        <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work have suffered alteration</div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">About Us</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                        <div className="inner-column">
                            <div className="icon-dots-2 bounce-y" />
                            <div className="image-box">
                                <figure className="image"><img src={AboutImage} alt="Image" /></figure>
                                <figure className="image-2 overlay-anim"><img src={AboutImage2} alt="Image" /></figure>
                                <figure className="image-3 overlay-anim reveal"><img src={AboutIcon} alt="Image" /></figure>
                                <div className="info-box bounce-x">
                                    <div className="inner">
                                        <i className="icon fa-light fa-rocket-launch" />
                                        <h5 className="title">The Best IT Service <br />Provider</h5>
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
