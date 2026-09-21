import React from 'react';
import {Link} from 'react-router-dom';

import Services1 from '../../assets/images/resource/service4-1.jpg';
import Services2 from '../../assets/images/resource/service4-2.jpg';
import Services3 from '../../assets/images/resource/service4-3.jpg';
import Services4 from '../../assets/images/resource/service4-4.jpg';

function ServiceList({ className }) {
    return (
        <>

        <section className={`services-section-four ${className || ''}`}>
            <div className="auto-container">
                <div className="row"> 
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services1} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-targeted-marketing" />
                                    <h4 className="title"><Link to="/page-service-details">Data Visualization</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services2} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-marketing" />
                                    <h4 className="title"><Link to="/page-service-details">Security System</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services3} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-technology" />
                                    <h4 className="title"><Link to="/page-service-details">Digital Marketing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services4} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-graphic-design" />
                                    <h4 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services2} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-marketing" />
                                    <h4 className="title"><Link to="/page-service-details">Security System</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services3} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-technology" />
                                    <h4 className="title"><Link to="/page-service-details">Digital Marketing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services4} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-graphic-design" />
                                    <h4 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">                
                        <div className="service-block-four wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Services1} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-targeted-marketing" />
                                    <h4 className="title"><Link to="/page-service-details">Data Visualization</Link></h4>
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

export default ServiceList;
