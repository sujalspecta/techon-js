import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../../assets/images/resource/about3-1.jpg';
import AboutImage2 from '../../assets/images/resource/about3-2.jpg';


function About({ className }) {
    return (
        <>

        <section id='about' className={`about-section-three ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title"> 
                                <span className="sub-title">About the company</span>
                                <h2 className="scrub-each-word text-split">We provide the best it solutions services</h2>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn personal touch</div>
                            </div>
                            <div className="row">
                                <div className="about-block-two col-sm-6">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-005-diplomat" />
                                        </div>
                                        <h5 className="title">Web <br />Development</h5>
                                    </div>
                                </div>
                                <div className="about-block-two col-sm-6">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-017-advertising" />
                                        </div>
                                        <h5 className="title">Internal <br />Networking</h5>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-style-two mb-30">
                                <li><i className="fa-solid fa-circle-check" /> Reliable Support and Maintenance</li>
                                <li><i className="fa-solid fa-circle-check" /> Scalability and Flexibility</li>
                                <li><i className="fa-solid fa-circle-check" /> Advanced Security Measures</li>
                            </ul>
                            <div className="btn-box">
                                <Link to="/page-about" className="theme-btn btn-style-one mt-0"><span className="btn-title">Explore Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 wow fadeInRight">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src={AboutImage} alt="Image" /></figure>
                                <figure className="image-2 overlay-anim"><img src={AboutImage2} alt="Image" /></figure>
                                <div className="info-box bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-business-009-medal" />
                                        <div className="content ml-20">
                                            <h3 className="count">4000</h3>
                                            <div className="text">Satisfied Clients</div>
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
