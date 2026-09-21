import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import BannerBG from '../../assets/images/banner/banner1-1.jpg';

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

            <section className={`banner-section ${className || ''}`}>
                <Swiper {...swiperOptions} className="banner-carousel owl-theme">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})`}}/>
                            <div className="shape-lines-1" />
                            <div className="shape-lines-2" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <div className="text-stroke animate-2">EXPERT</div>
                                    <div className="sub-title animate-1">STRATEGIC SOLUTIONS, LASTING IMPACT</div>
                                    <h1 className="title animate-2">IT Consulting <br />Services</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})` }} />
                            <div className="shape-lines-1" />
                            <div className="shape-lines-2" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <div className="text-stroke animate-2">EXPERT</div>
                                    <div className="sub-title animate-1">STRATEGIC SOLUTIONS, LASTING IMPACT</div>
                                    <h1 className="title animate-2">IT Consulting <br />Services</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: `url(${BannerBG})` }} />
                            <div className="shape-lines-1" />
                            <div className="shape-lines-2" />
                            <div className="auto-container">
                                <div className="content-box">
                                    <div className="text-stroke animate-2">EXPERT</div>
                                    <div className="sub-title animate-1">STRATEGIC SOLUTIONS, LASTING IMPACT</div>
                                    <h1 className="title animate-2">IT Consulting <br />Services</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore Now</span></Link>
                                    </div>
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