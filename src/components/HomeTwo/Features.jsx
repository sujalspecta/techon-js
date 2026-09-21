import React from 'react';
import Service4 from '/src/assets/images/resource/feature1-1.jpg';
import Service5 from '/src/assets/images/resource/feature1-2.jpg';
import Service6 from '/src/assets/images/resource/feature1-3.jpg';
import Service7 from '/src/assets/images/resource/feature1-4.jpg';


function Features({ className }) {
    return (
        <>

            <section className={`features-section-two ${className || ''}`}>
                <div className="auto-container">
                    <div className="sec-title light"> 
                        <div className="row align-items-lg-center">
                            <div className="col-lg-6">
                                <span className="sub-title style-two">OUR SERVICES</span>
                                <h2 className="scrub-each-word text-split">Explore what services we’re offering</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="text">we’re offering There are many variations of passages of available but majority alteration in some form</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="feature-block-two col-xl-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Service4} alt="Image" /></figure>
                                </div>
                                <div className="caption-box">
                                    <i className="icon flaticon-agency-digital-services" />
                                    <h4 className="title"><span>Web <br/>Development</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Service5} alt="Image" /></figure>
                                </div>
                                <div className="caption-box">
                                    <i className="icon flaticon-agency-graphic-design" />
                                    <h4 className="title"><span>UI/UX <br/>Designing</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Service6} alt="Image" /></figure>
                                </div>
                                <div className="caption-box">
                                    <i className="icon flaticon-business-3956725" />
                                    <h4 className="title"><span>Digital <br/>marketing</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={Service7} alt="Image" /></figure>
                                </div>
                                <div className="caption-box">
                                    <i className="icon flaticon-business-ui" />
                                    <h4 className="title"><span>IT <br/>Counsultancy</span></h4>
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
