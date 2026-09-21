import React from 'react';
import Features1 from '../../assets/images/background/bg1.jpg';

const Features = ({className}) => {
    return (

        <section className={`features-section ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sec-title pe-0">
                                <span className="sub-title">WHY CHOOSE US</span>
                                <h2 className="wow fadeInUp mb-30">We are increasing business success</h2>
                            </div>
                            <div className="row">
                                <div className="feature-block col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-graphic-design" />
                                        <h5 className="title">Product <br />Design</h5>
                                    </div>
                                    <div className="content">Good knowledge becuase you something many times.</div>
                                </div>
                                <div className="feature-block col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-technology" />
                                        <h5 className="title">Cyber <br />Security</h5>
                                    </div>
                                    <div className="content">Good knowledge becuase you something many times.</div>
                                </div>
                                <div className="feature-block col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-graphic-design" />
                                        <h5 className="title">Best <br />consultancy</h5>
                                    </div>
                                    <div className="content">Good knowledge becuase you something many times.</div>
                                </div>
                                <div className="feature-block col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-agency-technology" />
                                        <h5 className="title">Expert <br />developers</h5>
                                    </div>
                                    <div className="content">Good knowledge becuase you something many times.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image"><img src={Features1} alt="Image" /></figure>
                                <div className="info-box">
                                    <h3 className="title-2">We’re bringing latest business innovation in to the digital world</h3>
                                    <h4 className="title">Best IT Service Provider.</h4>
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
