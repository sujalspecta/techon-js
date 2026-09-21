import React from 'react';
import { Link } from 'react-router-dom';

function Contact({ className }) {
    return (
        <>

        <section id='contact' className={`contact-section-three ${className || ''}`}>
            <iframe  className="map"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <div className="auto-container">
                <div className="row">
                    <div className="form-column col-lg-4 col-md-8">
                        <div className="inner-column">
                            <div className="contact-box wow fadeInUp">
                                <p className="text">66 Road Broklyn Street, 600 <br />New York, USA</p>
                                <ul className="contact-list">
                                    <li className="mb-10"><Link to="/"><i className="fas fa-envelope mr-10" />needhelp@company.com</Link></li>
                                    <li><Link to="/"><i className="fas fa-phone mr-10" />+1234567789</Link></li>
                                </ul>
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
