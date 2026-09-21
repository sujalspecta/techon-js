import React from 'react';
import {Link} from 'react-router-dom';

const Features = ({className}) => {
    return (

        <section className={`features-section-four pull-up ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="feature-block-six col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="caption-box">
                                <i className="icon flaticon-business-global" />
                                <h4 className="title">Managed <br />Services</h4>
                                <p className="text">Write a short description, that will describe useful.</p>
                                <Link to="/page-about" className="read-more-btn"><i className="fas fa-circle-right me-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="caption-box">
                                <i className="icon flaticon-business-007-laptop" />
                                <h4 className="title">Software <br />Development</h4>
                                <p className="text">Write a short description, that will describe useful.</p>
                                <Link to="/page-about" className="read-more-btn"><i className="fas fa-circle-right me-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="caption-box">
                                <i className="icon flaticon-business-007-laptop" />
                                <h4 className="title">Cloud <br />Computing</h4>
                                <p className="text">Write a short description, that will describe useful.</p>
                                <Link to="/page-about" className="read-more-btn"><i className="fas fa-circle-right me-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-six col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="caption-box">
                                <i className="icon flaticon-business-023-technology" />
                                <h4 className="title">Technology <br />Consulting</h4>
                                <p className="text">Write a short description, that will describe useful.</p>
                                <Link to="/page-about" className="read-more-btn"><i className="fas fa-circle-right me-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;
