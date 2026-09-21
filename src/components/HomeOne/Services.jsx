import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '/src/assets/images/resource/service1-1.jpg';
import Service2 from '/src/assets/images/resource/service1-2.jpg';
import Service3 from '/src/assets/images/resource/service1-3.jpg';


function Services({ className }) {
    return (
        <>

        <div id='services' className={`services-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title light text-center"> <span className="sub-title">OUR SERVICES</span>
                    <h2 className="scrub-each-word text-split">We offer a wide variety <br />of it services</h2>
                </div>
                <div className="row">
                    <div className="service-block col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service1} alt="Image" /></figure>
                            </div>
                            <div className="title-box">
                                <h4 className="service-title"><Link to="/page-service-details">Technology<br /> Solution</Link></h4>
                            </div>
                            <div className="content-box">
                                <div className="icon"><i className="flaticon-business-3956725" /></div>
                                <div className="service-details">Developing a comprehensive IT strategy that aligns.</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service2} alt="Image" /></figure>
                            </div>
                            <div className="title-box">
                                <h4 className="service-title"><Link to="/page-service-details">IT Management<br /> Service</Link></h4>
                            </div>
                            <div className="content-box">
                                <div className="icon"><i className="flaticon-business-008-health-check" /></div>
                                <div className="service-details">Developing a comprehensive IT strategy that aligns.</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service3} alt="Image" /></figure>
                            </div>
                            <div className="title-box">
                                <h4 className="service-title"><Link to="/page-service-details">Data Tracking<br /> Security</Link></h4>
                            </div>
                            <div className="content-box">
                                <div className="icon"><i className="flaticon-business-002-color-sample" /></div>
                                <div className="service-details">Developing a comprehensive IT strategy that aligns.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Services;
