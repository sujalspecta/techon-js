import React, { useState } from 'react';

function FaqInner({ className }) {
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
        <>

        <section className={`why-choose-us-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="faq-column col-lg-6 wow fadeInRight">
                        <div className="inner-column pt-0">
                            <ul className="accordion-box">
                                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                                    <div  className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}><span className="count">1.</span> How can I create an account for free <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}><span className="count">2.</span> What is the return policy for a service <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}><span className="count">3.</span> What is the policy for money back guarantee <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="faq-column col-lg-6 wow fadeInLeft">
                        <div className="inner-column pt-0">
                            <ul className="accordion-box">
                                <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                                    <div  className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}><span className="count">1.</span> How can I create an account for free <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 5 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(5)}>
                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"}><span className="count">2.</span> What is the return policy for a service <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className={isActive.key == 6 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(6)}>
                                    <div  className={isActive.key == 6 ? "acc-btn active" : "acc-btn"}><span className="count">3.</span> What is the policy for money back guarantee <i className="icon fa fa-plus" /></div>
                                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default FaqInner;
