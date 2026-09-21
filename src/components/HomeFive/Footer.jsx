import React from 'react';
import {Link} from 'react-router-dom';
import FooterLogo from '../../assets/images/logo.png';

function Footer({ className }) {
    return (
        <>

        <footer className={`main-footer footer-style-two home4-style ${className || ''}`}>
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-xl-3 col-lg-6 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="widget-content">
                                    <div className="logo"><Link to="/"><img src={FooterLogo} alt="Logo" /></Link></div>
                                    <div className="text">Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut labore.</div>
                                    <ul className="social-icon-two light">
                                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-pinterest-p" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget gallery-widget">
                                <h4 className="widget-title">Office Information</h4>
                                <div className="widget-content">
                                    <ul className="contact-list-two light">
                                        <li><Link to="/"><i className="icon far fa-phone flex-shrink-0 me-3" /> +92 (666) 888 0000</Link></li>
                                        <li><Link to="/"><i className="icon far fa-envelope flex-shrink-0 me-3" /> needhelp@company.com</Link></li>
                                        <li><Link to="/"><i className="icon far fa-location-dot flex-shrink-0 me-3" /> 30 Commercial Road, Australia</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-lg-6 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="widget-title">Get Updates</h4>
                                <div className="widget-content">
                                    <p className="text">Feel free to contact us through Twitter or Facebook if you prefer!</p>
                                    <div className="newsletter-form">
                                        <form method="post" action="/">
                                            <div className="form-group">
                                                <input type="email" name="email" className="email" placeholder="Your email" required />
                                                <button type="button" className="theme-btn"><i className="fa fa-paper-plane" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-lg-6 col-sm-6">
                            <div className="footer-widget links-widget">
                                <h5 className="widget-title">Services</h5>
                                <div className="widget-content">
                                    <ul className="user-links">
                                        <li><Link to="/">Data Analysis</Link></li>
                                        <li><Link to="/">UI/UX Designing</Link></li>
                                        <li><Link to="/">Data Visualization</Link></li>
                                        <li><Link to="/">Digital Marketing</Link></li>
                                        <li><Link to="/">Security System</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">© Copyright reserved by Kodesolution.com</div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
}

export default Footer;
