import React from 'react';
import CounterUp from '../../lib/CounterUp2.jsx';
import FunfactBG from '../../assets/images/background/bg4.jpg';

function Funfact({ className }) {
    const percentage1 = 255;
    const percentage2 = 870;
    const percentage3 = 530;
    const percentage4 = 125;
    return (

        <section className={`funfact-section-two ${className || ''}`}>
            <div className="bg bg-image" style={{ backgroundImage: `url(${FunfactBG})`}}/>
            <div className="auto-container">
                <div className="row">
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-lines-5" />
                            <i className="icon flaticon-agency-targeted-marketing" />
                            <div className="count-box"><span className="count-text"><CounterUp count={percentage1} time={3} /></span></div>
                            <h6 className="counter-title">Successful Projects</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="icon-lines-5" />
                            <i className="icon flaticon-agency-recommend" />
                            <div className="count-box"><span className="count-text"><CounterUp count={percentage2} time={3} /></span></div>
                            <h6 className="counter-title">Business Interogation</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="icon-lines-5" />
                            <i className="icon flaticon-agency-diplomat" />
                            <div className="count-box"><span className="count-text"><CounterUp count={percentage3} time={3} /></span></div>
                            <h6 className="counter-title">Repeated Customers</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="icon-lines-5" />
                            <i className="icon flaticon-agency-teaching" />
                            <div className="count-box"><span className="count-text"><CounterUp count={percentage4} time={3} /></span></div>
                            <h6 className="counter-title">Expert Team Members</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Funfact;
