import React, { useState } from 'react';
import Sign from '../../assets/images/resource/slgirl.png';

function Accordion({ className }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 2,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (

        <section className={`why-choose-us-four ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center"> <span className="sub-title style-four">FREQUENTLY ASKED QUESTIONS</span>
                    <h2 className="scrub-each-word text-split">Improve & inhance your <br className="d-none d-lg-block" /> business with us</h2>
                </div>      
                <div className="row">                    
                    <div className="faq-column col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="inner-column">
                            <ul className="accordion-box">
                                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>What are IT solutions? <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content pb-0">
                                            <div className="text">IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development. such as network security, cloud computing, and software development.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>How can IT solutions benefit my business? <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content pb-0">
                                            <div className="text">IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development. such as network security, cloud computing, and software development.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>What types of IT solutions are available? <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content pb-0">
                                            <div className="text">IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development. such as network security, cloud computing, and software development.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>What is the implementation process for IT solutions? <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="content pb-0">
                                            <div className="text">IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development. such as network security, cloud computing, and software development.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-column col-lg-3 col-sm-6 wow fadeInLeft">
                        <div className="inner-column mb-md-50">
                            <div className="image-box">
                                <figure className="image"><img src={Sign} alt="Image" /></figure>
                                <div className="content text-center">
                                    <div className="text">25</div>
                                    <h3 className="title">Years Experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-3 col-sm-6 wow fadeInLeft">
                        <div className="inner-column mb-md-50">
                            <div className="icon-box">
                                <div className="icon-style d-flex align-items-center">
                                    <span className="icon fas fa-long-arrow-alt-right me-3 flex-shrink-0" />
                                    <h5 className="title">High Quality <br />Services</h5>
                                </div>
                                <div className="text">Write a short description, that will describe something useful</div>
                            </div>
                            <div className="icon-box">
                                <div className="icon-style d-flex align-items-center">
                                    <span className="icon fas fa-long-arrow-alt-right me-3 flex-shrink-0" />
                                    <h5 className="title">Perfect Business <br />Solution</h5>
                                </div>
                                <div className="text">Write a short description, that will describe something useful.</div>
                            </div>
                            <div className="icon-box">
                                <div className="icon-style d-flex align-items-center">
                                    <span className="icon fas fa-long-arrow-alt-right me-3 flex-shrink-0" />
                                    <h5 className="title">Commitment to <br />Deliver</h5>
                                </div>
                                <div className="text">Write a short description, that will describe something useful.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Accordion;
