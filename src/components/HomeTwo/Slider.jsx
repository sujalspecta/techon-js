import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import BannerBG from '../../assets/images/banner/banner2-1.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 850000,
        disableOnInteraction: false,
    },
    loop: true,
};

function Slider({ className }) {
    return (
        <>

            <section className={`banner-section-two ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})`}} />
                        <div className="shape-lines-1" />
                        <div className="shape-lines-2" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">DIGITAL <br/>TRANSFORMATION</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})`}} />
                        <div className="shape-lines-1" />
                        <div className="shape-lines-2" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">DIGITAL <br/>TRANSFORMATION</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})`}} />
                        <div className="shape-lines-1" />
                        <div className="shape-lines-2" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-2">DIGITAL <br/>TRANSFORMATION</h1>
                                <div className="btn-box animate-3">
                                    <Link to="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    );
}

export default Slider;