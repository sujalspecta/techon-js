import React from 'react';
import { Link } from 'react-router-dom';

import BannerBG from '../../assets/images/banner/home5-banner2.jpg';
import Banner2BG from '../../assets/images/banner/home5-banner1.png';

function Slider({ className }) {
    return (
        <>

        <section className={`banner-section-four ${className || ''}`}>
            <div className="bg" style={{ backgroundImage: `url(${BannerBG})`}} />
            <div className="bg style2" style={{ backgroundImage: `url(${Banner2BG})`}} />
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="content-column col-xl-6 col-lg-7">
                        <div className="inner-column">
                            <div className="sec-title light alt">
                                <h2 className="title wow fadeInUp" data-wow-delay="400ms">We are top <br className="d-none d-lg-block" /><span>Digital agency</span><br className="d-none d-md-block" /> In the world.</h2>
                                <div className="text wow fadeInUp" data-wow-delay="600ms">Elevate your business with premier cybersecurity and technology solutions. We offer the expertise and guidance to safeguard & propel your success.</div>
                            </div>
                            <div className="btn-box wow fadeInUp"  data-wow-delay="900ms">
                                <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                <Link to="/page-services" className="theme-btn btn-style-one bdr-theme1"><span className="btn-title">Our Services</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Slider;