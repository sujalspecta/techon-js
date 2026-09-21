import React from 'react';
import {Link} from 'react-router-dom';
import ServicesBG from '../../assets/images/icons/shape-3.jpeg';
import ServicesImage from '../../assets/images/resource/service4-1.jpg';
import ServicesImage2 from '../../assets/images/resource/service4-2.jpg';
import ServicesImage3 from '../../assets/images/resource/service4-3.jpg';
import ServicesImage4 from '../../assets/images/resource/service4-4.jpg';
import ServicesImage5 from '../../assets/images/resource/service4-5.jpg';

const Services = ({className}) => {
    return (

        <section id='services' className={`services-section-four ${className || ''}`}>
            <div className="bg bg-image" style={{ backgroundImage: `url(${ServicesBG})`}} />
            <div className="auto-container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="sec-title">
                            <span className="sub-title style-three">Services we’re offering</span>
                            <h2>We provide full range IT services</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="service-block-four wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={ServicesImage} alt="Image" /></figure>
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
                                    <figure className="image"><img src={ServicesImage2} alt="Image" /></figure>
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
                                    <figure className="image"><img src={ServicesImage3} alt="Image" /></figure>
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
                                    <figure className="image"><img src={ServicesImage4} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-graphic-design" />
                                    <h4 className="title"><Link to="/page-service-details">UI/UX Designing</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="service-block-four wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={ServicesImage5} alt="Image" /></figure>
                                </div>
                                <div className="caption-box"><i className="icon flaticon-agency-laptop" />
                                    <h4 className="title"><Link to="/page-service-details">Marketing Strategy</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="service-block-four style2 wow fadeInUp" data-wow-delay="1000ms">
                            <div className="inner-box">
                                <div className="lower-content">
                                    <p>Worldwide service</p>
                                    <h4 className="title"><Link to="/page-service-details">High quality products and services that we stand behind</Link></h4>
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></Link>
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
