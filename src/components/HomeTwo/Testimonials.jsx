import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialImage from '/src/assets/images/resource/testi1-1.jpg';
import TestimonialImage2 from '/src/assets/images/resource/testi1-2.jpg';
import TestimonialImage3 from '/src/assets/images/resource/testi1-3.jpg';
import TestimonialImage4 from '/src/assets/images/resource/testi2-1.png';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination:{ 
        clickable: true, 
        type: 'bullets'
    },
    loop: true,
};


function Testimonials({ className }) {
    return (
        <>

        <section id='testimonial' className={`testimonials-section-two ${className || ''}`}>
            <div className="bg bg-pattern-6" />
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 col-xl-5 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Our Testimonials</span>
                                <h2 className="scrub-each-word text-split">Desire that they can forese trouble</h2>
                            </div>
                            <Swiper {...swiperOptions} className="testimonial-carousel owl-theme default-dots">
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae.</div>
                                        <div className="author-box"><img src={TestimonialImage} alt="Image" />
                                            <div className="author-info">
                                                <h4 className="name">Michal Rahul</h4>
                                                <span className="designation">Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae.</div>
                                        <div className="author-box"><img src={TestimonialImage2} alt="Image" />
                                            <div className="author-info">
                                                <h4 className="name">Michal Rahul</h4>
                                                <span className="designation">It Officer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae.</div>
                                        <div className="author-box"><img src={TestimonialImage3} alt="Image" />
                                            <div className="author-info">
                                                <h4 className="name">Michal Rahul</h4>
                                                <span className="designation">It Officer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-xl-7">
                        <div className="inner-column">
                            <figure className="image"><img src={TestimonialImage4} alt="Image" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Testimonials;