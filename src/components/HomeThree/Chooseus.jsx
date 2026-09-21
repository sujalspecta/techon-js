import React from 'react';


function Chooseus({ className }) {
    return (
        <>

        <section className={`why-choose-us-three pb-lg-0 ${className || ''}`}>
            <div className="bg bg-pattern-1" />
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6">
                        <div className="inner-column wow fadeInRight">
                            <div className="sec-title light">
                                <span className="sub-title">Why Choose Us</span>
                                <h2>Your success starts <br className="d-none d-xl-block" /> here choose us!</h2>
                            </div>
                            <div className="feature-block-five pb-30">
                                <div className="inner-box">
                                    <i className="icon flaticon-agency-digital-services" />
                                    <h5 className="title">Website Development</h5>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
                                </div>
                            </div>
                            <div className="feature-block-five border-bottom-0">
                                <div className="inner-box">
                                    <i className="icon flaticon-agency-technology" />
                                    <h5 className="title">Internal Networking</h5>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-lg-6">
                        <div className="inner-column">
                            <p className="fs-6 mb-70 mt-xl-5 text-white position-relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo Write short that will describe the title or something.</p>
                            <div className="contact-form wow fadeInLeft">
                                <form method="post" action="get" id="contact-form">
                                    <h3 className="text-center">Get in Touch</h3>
                                    <div className="row">
                                        <div className="col-lg-12 form-group">
                                            <input className="form-control" type="text" name="full_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <input className="form-control" type="text" name="Email" placeholder="Your Email" required />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <input className="form-control" type="text" name="Phone" placeholder="Phone No" required />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <input className="form-control" type="text" name="full_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <textarea name="form_message" className="form-control required" rows="4" placeholder="Enter Message"></textarea>
                                        </div>
                                        <div className="col-sm-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a Message</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Chooseus;
