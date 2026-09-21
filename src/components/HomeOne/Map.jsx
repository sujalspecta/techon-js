import React from 'react';
import { Link } from 'react-router-dom';

function Map({ className }) {
    return (
        <>

        <section id='contact' className={`map-section ${ className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row g-0">
                        <div className="contact-info-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner">
                                <i className="icon fa fa-phone-volume" />
                                <h6 className="title">Have question?</h6>
                                <div className="text">Free <Link to="/">+23 (000)-9850</Link></div>
                            </div>
                        </div>
                        <div className="contact-info-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner">
                                <i className="icon fa fa-envelope" />
                                <h6 className="title">Send email</h6>
                                <div className="text"><Link to="/">needhelp@company.com</Link></div>
                            </div>
                        </div>
                        <div className="contact-info-block col-lg-4 col-md-12 col-sm-12">
                            <div className="inner">
                                <i className="icon fa fa-map-marker-alt" />
                                <h6 className="title">Visit anytime</h6>
                                <div className="text">30 broklyn golden street. USA</div>
                            </div>
                        </div>
                    </div>
                    <div className="social-link-outer">
                        <div className="text">Follow us now</div>
                        <ul className="social-icon-two">
                            <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                            <li><Link to="/"><i className="fab fa-facebook" /></Link></li>
                            <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <iframe  className="map"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>

        </>
    );
}

export default Map;
