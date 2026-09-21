import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ClientsImage from '/src/assets/images/clients/1.png';
import ClientsImage2 from '/src/assets/images/clients/2.png';
import ClientsImage3 from '/src/assets/images/clients/3.png';
import ClientsImage4 from '/src/assets/images/clients/4.png';
import ClientsImage5 from '/src/assets/images/clients/5.png';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 5,
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
        1350: { slidesPerView: 5 },
    }
};


function Clients({ className }) {
    return (
        <>

        <section className={`clients-section pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="sponsors-outer">
                        <Swiper {...swiperOptions} className="clients-carousel owl-theme">
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage2} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage3} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage4} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage5} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage2} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage3} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage4} alt="Image" /></Link></SwiperSlide>
                            <SwiperSlide className="client-block"><Link href="/"><img src={ClientsImage5} alt="Image" /></Link></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Clients;
