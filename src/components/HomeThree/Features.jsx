import React from 'react';
import { Link } from 'react-router-dom';
import Service4 from '../../assets/images/resource/feature2-1.jpg';
import Service5 from '../../assets/images/resource/feature2-2.jpg';
import Service6 from '../../assets/images/resource/feature2-3.jpg';
import Service7 from '../../assets/images/resource/feature2-4.jpg';


function Features({ className }) {
    return (
        <>

        <section className={`features-section-three pull-up ${className}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="feature-block-four col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service4} alt="Image" /></figure>
                            </div>
                            <div className="caption-box">
                                <i className="icon flaticon-agency-digital-services" />
                                <h4 className="title"><Link to="/page-service-details">Web <br />Development</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-four col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service5} alt="Image" /></figure>
                            </div>
                            <div className="caption-box">
                                <i className="icon flaticon-agency-graphic-design" />
                                <h4 className="title"><Link to="/page-service-details">IT <br />Counsultancy</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-four col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service6} alt="Image" /></figure>
                            </div>
                            <div className="caption-box">
                                <i className="icon flaticon-agency-technology" />
                                <h4 className="title"><Link to="/page-service-details">UI/UX <br />Designing</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-four col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src={Service7} alt="Image" /></figure>
                            </div>
                            <div className="caption-box">
                                <i className="icon flaticon-agency-health-check" />
                                <h4 className="title"><Link to="/page-service-details">Digital <br />marketing</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Features;
