import React from 'react';
import {Link} from 'react-router-dom';
import AboutImage from '../../assets/images/resource/about5-1.jpg';

const About = ({className}) => {
    return (

        <section id='about' className={`about-section-five pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-7 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-three">our introduction</span>
                                <h2 className="scrub-each-word text-split">Expert of software & tech programing</h2>
                            </div>
                            <h4 className="text-title">Stop worrying we take care of your tech Problems</h4>
                            <div className="text mb-40">When your audience visits your website, it gives them their first impression of your business. They will judge your business within seconds. In these first few seconds, you want to make a positive impact on your audience If your website</div>
                            <div className="row">
                                <div className="about-block-three col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-business-005-diplomat" />
                                        <h5 className="title">Website <br/>Development</h5>
                                    </div>
                                </div>
                                <div className="about-block-three col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-business-006-teaching" />
                                        <h5 className="title">Internal <br/>Networking</h5>
                                    </div>
                                </div>
                            </div>
                            <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">About Us</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-5 wow fadeInRight">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src={AboutImage} alt="Image" /></figure>
                                <div className="info-box bounce-x">
                                    <div className="inner">
                                        <i className="icon flaticon-business-009-medal" />
                                        <div className="content">
                                            <h3 className="count">2900</h3>
                                            <div className="text">Projects Completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
