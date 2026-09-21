import React from 'react';
import {Link} from 'react-router-dom';
import FooterBg from '../../assets/images/background/bg-footer1.png';
import FooterLogo from '../../assets/images/logo-wide-white.png';

function Footer({ className }) {
    return (
        <>

        <footer className={`main-footer footer-style-one ${className || ''}`}>
            <div className="bg bg-image" style={{ backgroundImage: `url(${FooterBg})`}} />
            <div className="footer-upper">
                <div className="auto-container">
                    <div className="row">
                        <div className="contact-info-block-two col-lg-4 col-md-6">
                            <div className="inner">
                                <i className="icon fa fa-phone-square" />
                                <span className="sub-title">Call Anytime</span>
                                <div className="text"><Link to="/">+92 (8800) -89 8630</Link></div>
                            </div>
                        </div>
                        <div className="contact-info-block-two col-lg-4 col-md-6">
                            <div className="inner">
                                <i className="icon fa fa-envelope" />
                                <span className="sub-title">Send Email</span>
                                <div className="text"><Link to="/">needhelp@company.com</Link></div>
                            </div>
                        </div>
                        <div className="contact-info-block-two col-lg-4 col-md-6">
                            <div className="inner">
                                <i className="icon fas fa-map-marker-alt" />
                                <span className="sub-title">Addres</span>
                                <div className="text">30 Broklyn Golden Street. USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-xl-4 col-lg-6 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="widget-content">
                                    <div className="logo">
                                        <Link to="/"><img src={FooterLogo} alt="Techon" /></Link>
                                    </div>
                                    <div className="text">Welcome to our digital agency. Lorem ipsum simply free text dolor sited amet cons cing elit.</div>
                                    <ul className="social-icon-two light">
                                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-pinterest-p" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-4 col-lg-6 col-sm-6">
                            <div className="footer-widget links-widget">
                                <h4 className="widget-title">Useful Links</h4>
                                <div className="widget-content">
                                    <ul className="user-links two-column">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Services</Link></li>
                                        <li><Link to="/">Our Team</Link></li>
                                        <li><Link to="/">FAQ</Link></li>
                                        <li><Link to="/">News</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-4 col-lg-6 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="widget-title">Newsletter</h4>
                                <div className="widget-content">
                                    <p className="text">Subsrcibe for our latest resources</p>
                                    <div className="newsletter-form">
                                        <form method="post" action="/">
                                            <div className="form-group">
                                                <input type="email" name="email" className="email" placeholder="Your Email" required />
                                                <button type="button" className="theme-btn"><i className="fa fa-paper-plane" /></button>
                                            </div>
                                        </form>
                                    </div>
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
