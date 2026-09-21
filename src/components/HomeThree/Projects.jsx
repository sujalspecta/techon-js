import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


import Projects1 from '/src/assets/images/resource/project1-1.jpg';
import Projects2 from '/src/assets/images/resource/project1-2.jpg';
import Projects3 from '/src/assets/images/resource/project1-3.jpg';
import Projects4 from '/src/assets/images/resource/project1-4.jpg';

const swiperOptions = {
    modules: [Autoplay,  Navigation],
    slidesPerView: 4,
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
        575: { slidesPerView: 2 },
        767: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1199: { slidesPerView: 4 },
        1350: { slidesPerView: 4 },
    }
};

function Projects({ className }) {
    return (

        <section id='project' className={`projects-section-two pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="sec-title">
                        <span className="sub-title">Our Portfolio</span>
                        <h2 className="scrub-each-word text-split">Recently completed our <br/>successful Projects</h2>                            
                    </div>
                    <div className="owl-nav">
                        <div className="owl-prev"><span className="far fa-arrow-left"></span></div>
                        <div className="owl-next"><span className="far fa-arrow-right"></span></div>
                    </div>
                    <div className="carousel-outer">
                        <Swiper {...swiperOptions} className="project-carousel-two owl-theme disable-navs">
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects1} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Security</div>
                                        <h4 className="title">App Integration</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects2} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Technology</div>
                                        <h4 className="title">Product & Design</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects3} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Design</div>
                                        <h4 className="title">Network Security</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects4} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Development</div>
                                        <h4 className="title">Website Design</h4>
                                    </div>
                                </div>
                            </SwiperSlide>                       
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects1} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Security</div>
                                        <h4 className="title">App Integration</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects2} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Technology</div>
                                        <h4 className="title">Product & Design</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects3} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Design</div>
                                        <h4 className="title">Network Security</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image overlay-anim">
                                        <img className="w-100" src={Projects4} alt="Image" />
                                    </figure>
                                    <div className="content-box">
                                        <div className="cat">Development</div>
                                        <h4 className="title">Website Design</h4>
                                    </div>
                                </div>
                            </SwiperSlide>                       
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Projects;
