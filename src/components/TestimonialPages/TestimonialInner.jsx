import React from 'react';
import TestimonialIcon from '../../assets/images/resource/testi1-1.jpg';
import TestimonialImage1 from '../../assets/images/resource/testi1-1.jpg';
import TestimonialImage2 from '../../assets/images/resource/testi1-1.jpg';
import TestimonialImage3 from '../../assets/images/resource/testi1-1.jpg';

function TestimonialInner({ className }) {
    return (
        <>

        <section className={`testimonial-section-home2 pb-60 ${className || ''}`}>
            <div className="float-image"><img src={TestimonialIcon} alt="Image" /></div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="testimonial-block-two">
                            <div className="inner-content">
                                <div className="text">“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div>
                                <div className="reviews">
                                    <div className="stars" />
                                </div>
                                <div className="testi-quote"><i className="fas fa-quote-right" /></div>
                            </div>
                            <div className="img-content d-flex align-items-end pb-xl-0 mb-5 mb-xl-0">
                                <div className="testi-img"><img src={TestimonialImage1} /></div>
                                <div className="testi-holder ml-15">
                                    <div className="text">Co Founder</div>
                                    <h5 className="my-0">Jhon D. William</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="testimonial-block-two">
                            <div className="inner-content">
                                <div className="text">“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div>
                                <div className="reviews">
                                    <div className="stars" />
                                </div>
                                <div className="testi-quote"><i className="fas fa-quote-right" /></div>
                            </div>
                            <div className="img-content d-flex align-items-end pb-xl-0 mb-5 mb-xl-0">
                                <div className="testi-img"><img src={TestimonialImage2} /></div>
                                <div className="testi-holder ml-15">
                                    <div className="text">Co Founder</div>
                                    <h5 className="my-0">Aleesha Brown</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="testimonial-block-two">
                            <div className="inner-content">
                                <div className="text">“All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature sensitive loads can be monitored at all times.</div>
                                <div className="reviews">
                                    <div className="stars" />
                                </div>
                                <div className="testi-quote"><i className="fas fa-quote-right" /></div>
                            </div>
                            <div className="img-content d-flex align-items-end pb-xl-0 mb-5 mb-xl-0">
                                <div className="testi-img"><img src={TestimonialImage3} /></div>
                                <div className="testi-holder ml-15">
                                    <div className="text">Co Founder</div>
                                    <h5 className="my-0">Mike Hardon</h5>
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

export default TestimonialInner;
