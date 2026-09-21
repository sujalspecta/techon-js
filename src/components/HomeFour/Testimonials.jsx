import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialImage from '/src/assets/images/resource/testi1-1.jpg';
import TestimonialImage2 from '/src/assets/images/resource/testi1-2.jpg';
import TestimonialImage3 from '/src/assets/images/resource/testi1-3.jpg';

const swiperOptions = {
    modules: [Autoplay,  Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 2 },
        1350: { slidesPerView: 2 },
    }
};


function Testimonials({ className }) {
    return (
        <>

        <section id='testimonial' className={`testimonial-section style-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row"> 
                    <div className="content-column col-xl-5 col-lg-4">
                        <div className="inner-column">
                            <div className="sec-title pe-xl-5">
                                <span className="sub-title">OUR CLIENTS</span>
                                <h2 className="scrub-each-word text-split">We are Trusted 15+ countries world wide</h2>
                            </div>
                            <div className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                            <div className="text">Trust score 4.5 (Based on 1,500 reviews)</div>
                            <div className="owl-nav">
                                <div className="owl-prev"><span className="far fa-arrow-left"></span></div>
                                <div className="owl-next"><span className="far fa-arrow-right"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8">
                        <div className="outer-box">
                            <Swiper {...swiperOptions} className="testimonial-carousel-two owl-theme">
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">Emily Foster</h4>
                                            <span className="designation">HR Admin</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage2} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">David Smith</h4>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage3} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">Olivia Green</h4>
                                            <span className="designation">Manager</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">Emily Foster</h4>
                                            <span className="designation">HR Admin</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage2} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">David Smith</h4>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking maecenas senectus.</div>
                                        </div>
                                        <div className="author-box"><img src={TestimonialImage3} alt="Image" />
                                        <div className="author-info">
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </div>
                                            <h4 className="name">Olivia Green</h4>
                                            <span className="designation">Manager</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Testimonials;