import React from 'react';
import { Link } from 'react-router-dom';
import ServiceBG from '/src/assets/images/background/bg2.jpg';

function Services({ className }) {
    return (
        <>

        <section id='services' className={`services-section-two pb-0 ${className || ''}`}>
            <div className="bg bg-pattern-1" />
            <div className="auto-container">
                <div className="sec-title light">
                    <span className="sub-title">Our Features</span>
                    <h2>What we offer</h2>
                </div>
                <div className="row">
                    <div className="service-block-two offset-xl-6 col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">Web <br />Development</Link></h6>
                            <i className="icon flaticon-business-vector-4" />
                        </div>
                    </div>
                    <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">Internal <br />Networking</Link></h6>
                            <i className="icon flaticon-business-laptop" />
                        </div>
                    </div>
                    <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">Managed IT <br />Services</Link></h6>
                            <i className="icon flaticon-business-005-diplomat" />
                        </div>
                    </div>
                    <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">Web Case <br />Solutions</Link></h6>
                            <i className="icon flaticon-business-creativity" />
                        </div>
                    </div>
                    <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">Software <br />Development</Link></h6>
                            <i className="icon flaticon-business-3956725" />
                        </div>
                    </div>
                    <div className="service-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <h6 className="title"><Link to="/page-service-details">IT Consulting Services</Link></h6>
                            <i className="icon flaticon-business-digital-marketing" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="call-to-action">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="bg" style={{ backgroundImage: `url(${ServiceBG})`}} />
                        <div className="title-box">
                            <h3 className="title">Great solution for your business growth!</h3>
                        </div>
                        <div className="btn-box">
                            <Link to="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">get a qoute</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Services;
