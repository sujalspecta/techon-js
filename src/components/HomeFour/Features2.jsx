import React from 'react';
import {Link} from 'react-router-dom';
import Features2 from '../../assets/images/resource/divider-bg-1.jpg';

const Features = ({className}) => {
    return (

        <section className={`features-section-five p-0 ${className || ''}`}>
            <div className="icon-lines-13" />
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sec-title pe-0">
                                <span className="sub-title text-white">What We’re offering</span>
                                <h2 className="wow fadeInUp mb-30">Let’s overcome your <br/> tech challanges</h2>
                                <div className="text">The most eminent technology and solutions consultant service The most eminent technology and solutions consultant service suffered</div>
                            </div>
                            <div className="row">
                                <div className="feature-block-seven col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-graphic-design" />
                                        <h5 className="title">Web <br/>Development</h5>
                                    </div>
                                </div>
                                <div className="feature-block-seven col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-technology" />
                                        <h5 className="title">Internal <br/>Networking</h5>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text mb-25">The most eminent technology and solutions consultant service The most eminent technology and solutions consultant service suffered</div>
                                </div>
                            </div>
                            <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Contact Us</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src={Features2} alt="Image" /></figure>
                                <div className="info-box">
                                    <div className="icon-lines-6" />
                                    <h4 className="title">Affordable Big IT & <br/>Technology Solutions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;
