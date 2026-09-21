import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import News1 from '../../assets/images/resource/news1-1.jpg';
import News2 from '../../assets/images/resource/news1-2.jpg';
import News3 from '../../assets/images/resource/news1-3.jpg';

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
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
        767: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1350: { slidesPerView: 3 },
    }
};

function News({ className }) {
    return (
        <>
        <section id='news' className={`news-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="sec-title pe-xl-5">
                            <span className="sub-title style-three">From The Blog</span>
                            <h2 className="scrub-each-word text-split">Check the latest news & updates</h2>
                            <div className="owl-nav">
                                <div className="owl-prev"><span className="far fa-arrow-left"></span></div>                                
                                <div className="owl-next"><span className="far fa-arrow-right"></span></div>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-lg-8 wow fadeInUp">
                        <div className="testimonials_inner">
                            <Swiper {...swiperOptions} className="news-carousel owl-theme">
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News1} alt="Image" />
                                                    <img src={News1} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Development</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Your Business Safe Ensure High Availability</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News2} alt="Image" />
                                                    <img src={News2} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Strategy</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Data Backup and Recovery Best Practices Small</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News3} alt="Image" />
                                                    <img src={News3} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Strategy</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Make a Marketing Strategy for your Small Business</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News1} alt="Image" />
                                                    <img src={News1} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Development</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Your Business Safe Ensure High Availability</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News2} alt="Image" />
                                                    <img src={News2} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Strategy</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Data Backup and Recovery Best Practices Small</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="news-block mb-0">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link to="/news-details">
                                                    <img src={News3} alt="Image" />
                                                    <img src={News3} alt="Image" />
                                                </Link>
                                            </figure>
                                            <div className="date">30 Mar, 2023</div>
                                        </div>
                                        <div className="content-box">
                                            <ul className="post-meta">
                                                <li><i className="fa fa-tag" /> Strategy</li>
                                                <li><i className="fa fa-comments" /> 2 Comments</li>
                                            </ul>
                                            <h4 className="title"><Link to="/news-details">Make a Marketing Strategy for your Small Business</Link></h4>
                                            <Link to="/news-details" className="read-more"><i className="fas fa-circle-right" /> View Details</Link>
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

export default News;
