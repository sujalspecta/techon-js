import React from 'react';
import {Link} from 'react-router-dom';

import ContactBG from '../../assets/images/resource/person1.png';

function Contact2({ className }) {
    return (
        <>

        <section id='contact' className={`contact-section-four ${className || ''}`}>
            <div className="bg bg-pattern-4" />
            <div className="bg-image"><img src={ContactBG} alt="Image" /></div>
            <div className="auto-container">
                <div className="row">
                    
                    <div className="title-column col-lg-6">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">contact with us</span>
                                <h2>let’s work together?</h2>
                                <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem.</div>
                            </div>
                            <div className="contact-info-block-four">
                                <div className="inner">
                                    <i className="icon fa fa-phone" />
                                    <h6 className="title">Have any question?</h6>
                                    <div className="text">Free <Link to="/">+23 (000)-9850</Link></div>
                                </div>
                            </div>
                            <div className="contact-info-block-four">
                                <div className="inner">
                                    <i className="icon fa fa-envelope" />
                                    <h6 className="title">Send email</h6>
                                    <div className="text"><Link to="/">needhelp@company.com</Link></div>
                                </div>
                            </div>
                            <div className="contact-info-block-four">
                                <div className="inner">
                                    <i className="icon fa fa-map-marker-alt" />
                                    <h6 className="title">Visit anytime</h6>
                                    <div className="text">30 broklyn golden street. New York</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-lg-6">
                        <div className="inner-column">
                            <div className="contact-form wow fadeInLeft">
                                <h2 className="title text-center">Contact us</h2>
                                <form method="post" action="/" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="form_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="email" name="form_email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="form_subject" placeholder="Your Subject" required />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="email" name="form_phone" placeholder="Enter Phone" required />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <textarea name="message" placeholder="Write a Message" required></textarea>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <button className="theme-btn btn-style-one hvr-dark" type="submit" name="submit-form"><span className="btn-title">Send a Message</span></button>
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

export default Contact2;
