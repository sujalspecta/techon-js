import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


import Projects1 from '/src/assets/images/resource/project1-1.jpg';
import Projects2 from '/src/assets/images/resource/project1-2.jpg';
import Projects3 from '/src/assets/images/resource/project1-3.jpg';
import Projects4 from '/src/assets/images/resource/project1-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 2 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 4 },
        1350: { slidesPerView: 4 },
    }
};

function Projects({ className }) {
    return (

        <section id='project' className={`projects-section ${className || ''}`}>
            <div className="large-container">
                <div className="sec-title text-center"> <span className="sub-title">Our projects list</span>
                    <h2 className="scrub-each-word text-split">Recently completed tech <br/>projects you see</h2>
                </div>
                <div className="carousel-outer">
                    <Swiper {...swiperOptions} className="project-carousel owl-theme disable-navs">
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects1} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Social Media App</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects2} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">App Virtual Reality</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects3} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Analysis of Security</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects4} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Social Marketing</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects1} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Social Media App</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects2} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">App Virtual Reality</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects3} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Analysis of Security</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project-block home4-style">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><img src={Projects4} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h4 className="title">Social Marketing</h4>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    );
}

export default Projects;
