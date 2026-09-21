import React from 'react';
import { Link } from 'react-router-dom';

import BannerBG from '../../assets/images/main-slider/1.jpg';

function Slider({ className }) {
    return (
        <>

            <section className={`banner-section-five ${className || ''}`}>            
                <div className="tp-dottedoverlay" />
                <div className="bg" style={{ backgroundImage: `url(${BannerBG})`}} />
                <div className="auto-container">
                    <div className="content-column">
                        <div className="inner-column">
                            <div className="sec-title light alt">
                                <h1 className="title">Powerful <br />IT Solutions &amp; <br />Services</h1>
                            </div>
                            <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                <Link to="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-curve">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                    </svg>
                </div>
            </section>            

        </>
    );
}

export default Slider;