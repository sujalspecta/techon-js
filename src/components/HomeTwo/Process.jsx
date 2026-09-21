import React from 'react';

function Process({ className }) {
    return (
        <>

        <section className={`process-section ${className || ''}`}>
            <div className="bg bg-pattern-2" />
            <div className="small-container">
                <div className="sec-title text-center">
                    <span className="sub-title style-three">Our Working Process</span>
                    <h2 className="scrub-each-word text-split">Get your it solutions in 3 <br />easy steps</h2>
                </div>
                <div className="row">
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="count">01</div>
                            <div className="content">
                                <h5 className="title">Assessment & <br />Planning</h5>
                            </div>
                        </div>
                    </div>
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="count">02</div>
                            <div className="content">
                                <h5 className="title">Implementation & <br />Deployment</h5>
                            </div>
                        </div>
                    </div>
                    <div className="process-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="count">03</div>
                            <div className="content">
                                <h5 className="title">Support & <br />Optimization</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Process;
