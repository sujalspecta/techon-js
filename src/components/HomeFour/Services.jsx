import React from 'react';
import {Link} from 'react-router-dom';
import ServicesImage from '../../assets/images/resource/service3-img1.png';

const Services = ({className}) => {
    return (

            <section id='services' className={`services-section-three ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title style-three">Services We Provide</span>
                        <h2 className="scrub-each-word text-split">Explore Our Services For <br />Modern Technology</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-sm-6">
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-collaboration" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">Data Visualization</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three style2 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-023-technology" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">Digital Marketing</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-011-recommend" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">Security System</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 pe-0 d-none d-xl-block">
                            <div className="service-block-three text-center">
                                <div className="thumb"><img className="bounce-y" src={ServicesImage} alt="Image" /></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-013-campaign" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">Data Analysis</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three style3 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-022-graphic-design" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">Marketing Strategy</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Service Block --> */}
                            <div className="service-block-three wow fadeInUp">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <div className="icon flaticon-business-diamond1" />
                                        <div className="content">
                                            <h4 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h4>
                                            <div className="text">Leverage agile frameworks to provide a robust synopsis</div>
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

export default Services;
