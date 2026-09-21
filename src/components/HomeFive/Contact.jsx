import React from 'react';

import ContactBG from '../../assets/images/background/bg3.jpg';

function Contact({ className }) {
    return (
        <>

        <section id='contact' className={`contact-section-two p-0 ${className || ''}`}>
            <div className="bg bg-pattern-5" />
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-three">What We’re offering</span>
                                <h2 className="scrub-each-word text-split">Let’s work together your tech challenges</h2>
                                <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem.</div>
                            </div>
                            <ul className="features-list row">
                                <li className="col-sm-6"><i className="fa fa-circle-check"></i> Pellentes gravida lectus.</li>
                                <li className="col-sm-6"><i className="fa fa-circle-check"></i> Finibus aliquet ultrices.</li>
                            </ul>
                            <div className="row gx-3">
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon fa fa-globe"></i>
                                            <h5 className="title">Website</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon flaticon-business-020-android-logo"></i>
                                            <h5 className="title">IOS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon flaticon-business-021-television"></i>
                                            <h5 className="title">IOT</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon flaticon-business-022-design-1"></i>
                                            <h5 className="title">Designing</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon flaticon-business-023-lamp"></i>
                                            <h5 className="title">Technology</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block-three col-sm-6">
                                    <div className="inner-box">
                                        <div className="content"> <i className="icon flaticon-business-024-brain"></i>
                                            <h5 className="title">Data Security</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-lg-6">
                        <div className="bg bg-image" style={{ backgroundImage: `url(${ContactBG})`}} />
                        <div className="inner-column">
                            <div className="overlay-1 d-block d-lg-none d-xl-block" />
                            <div className="contact-form wow fadeInLeft" data-wow-delay="300ms">
                                <div className="icon-lines-7" />
                                <h4 className="title">Send Message</h4>
                                <form method="post" name="contact_form" action="/" id="contact_form">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="form_name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="form_email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="form_subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Write a Message" rows="2" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form" data-loading-text="Please wait..."><span className="btn-title">Send a Message</span></button>
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

export default Contact;
